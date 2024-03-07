require('dotenv').config();

const express = require('express');
const cors = require('cors');
const neo4j = require('neo4j-driver');
const loadDataToDatabase = require('./dataLoader');  

const app = express();
const port = process.env.PORT || 3003;

app.use(cors());
app.use(express.json());

const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
);

driver.verifyConnectivity()
  .then(() => console.log('Successfully connected to Neo4j'))
  .catch(error => console.error('Error connecting to Neo4j:', error));

app.get('/', (req, res) => {
  res.send('Welcome to the Neo4j API Server!');
});

// Your API endpoints here...
app.get('/api/test', (req, res) => {
  try {
    res.json({ status: 200, message: 'Test endpoint working' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, message: 'Internal Server Error' });
  }
});

app.get('/api/wallet/:walletId/transactions', async (req, res) => {
  const session = driver.session();
  try {
    const walletId = req.params.walletId;
    const result = await session.run(
      `
      MATCH (w:Wallet {addressId: $walletId})-[t:Transaction]->()
      RETURN 
          t.value AS value,
          t.input AS input,
          t.transaction_index AS transaction_index,
          t.gas AS gas,
          t.gas_used AS gas_used,
          t.gas_price AS gas_price,
          t.transaction_fee AS transaction_fee,
          t.block_number AS block_number,
          t.block_hash AS block_hash,
          t.block_timestamp AS block_timestamp
      LIMIT 10;
      `,
      { walletId: walletId }
    );

    if (!result.records.length) {
      return res.status(404).json({ status: 404, error: 'No transactions found for this wallet' });
    }

    const transactions = result.records.map(record => ({
      value: record.get('value'),
      input: record.get('input'),
      transaction_index: record.get('transaction_index'),
      gas: record.get('gas'),
      gas_used: record.get('gas_used'),
      gas_price: record.get('gas_price'),
      transaction_fee: record.get('transaction_fee'),
      block_number: record.get('block_number'),
      block_hash: record.get('block_hash'),
      block_timestamp: record.get('block_timestamp')
    }));

    res.json({ status: 200, transactions: transactions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  } finally {
    session.close();
  }
});

app.get('/api/wallet/:walletId/connected', async (req, res) => {
  const session = driver.session();
  try {
    const walletId = req.params.walletId;
    const result = await session.run(
      `
      MATCH (w:Wallet {addressId: $walletId})-[t:Transaction]->(connectedWallet:Wallet)
      RETURN connectedWallet.addressId AS connectedAddressId
      `,
      { walletId: walletId }
    );

    if (!result.records.length) {
      return res.status(404).json({ status: 404, error: 'No connected addresses found for this wallet' });
    }

    const connectedAddresses = result.records.map(record => record.get('connectedAddressId'));

    res.json({ status: 200, connectedAddresses: connectedAddresses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  } finally {
    session.close();
  }
});

async function startServer() {
  try {
    await loadDataToDatabase();
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error while starting the server:', error);
  }
}

startServer();

// Graceful shutdown
process.on('exit', () => driver.close());
process.on('SIGINT', () => process.exit());
process.on('SIGTERM', () => process.exit());
