const neo4j = require('neo4j-driver');

const driver = neo4j.driver(
    process.env.NEO4J_URI,
    neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
  );


async function loadDataToDatabase() {
  const session = driver.session();
  try {
    console.log("Attempting to delete existing nodes and relationships...");
    // ... (rest of your data loading code)

    await session.run(`
    MATCH (a)-[r]->() DELETE a, r
    WITH 0 AS dummy
    MATCH (a) DELETE a
    
    `);

    console.log("Existing nodes and relationships deleted successfully.");
    // Applying constraints...
    await session.run(`
      CREATE CONSTRAINT imp_uniq_Wallet_addressId IF NOT EXISTS
      FOR (n: Wallet)
      REQUIRE (n.addressId) IS UNIQUE;
    `);

    // Loading nodes...
    await session.run(`
      LOAD CSV WITH HEADERS FROM "https://raw.githubusercontent.com/102560056/COS30049_Data/main/nodes.csv" AS row
      WITH row
      WHERE NOT row.addressId IS NULL
      MERGE (n: Wallet { addressId: row.addressId })
      SET n.type = row.type
    `);

    // Loading relationships...
    await session.run(`
      LOAD CSV WITH HEADERS FROM "https://raw.githubusercontent.com/102560056/COS30049_Data/main/relationships.csv" AS row
      WITH row 
      MATCH (source: Wallet { addressId: row.from_address })
      MATCH (target: Wallet { addressId: row.to_address })
      CREATE (source)-[r: Transaction]->(target)
      SET r += row,
          r.transaction_index = toInteger(trim(row.transaction_index)),
          r.gas = toInteger(trim(row.gas)),
          r.gas_used = toInteger(trim(row.gas_used)),
          r.gas_price = toInteger(trim(row.gas_price)),
          r.transaction_fee = toInteger(trim(row.transaction_fee)),
          r.block_number = toInteger(trim(row.block_number)),
          r.block_timestamp = toInteger(trim(row.block_timestamp))
    `);
    console.log('Data loaded successfully!');
  } catch (error) {
    console.error(error);
  } finally {
    session.close();
  }
}

module.exports = loadDataToDatabase;
