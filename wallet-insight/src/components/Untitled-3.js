// Endpoint to get wallet details and transactions
app.get('/api/wallet/:walletId', async (req, res) => {
  const session = driver.session();
  try {
      const walletId = req.params.walletId;

      // Query to get wallet details and transactions
      const result = await session.run(
          `
          MATCH (w:Wallet {addressId: $walletId})-[:Transaction]-(t)
          RETURN w.addressId as walletId, collect(t) as transactions
          `,
          { walletId: walletId }
      );

      if (!result.records.length) {
          return res.status(404).json({ status: 404, error: 'Wallet not found' });
      }

      const record = result.records[0];
      const walletData = {
          status: 200,
          content: {
              walletId: record.get('walletId'),
              transactions: record.get('transactions').map(t => ({
                  from: t.properties.from_address,
                  to: t.properties.to_address,
                  hash: t.properties.hash,
                  value: t.properties.value,
                  input: t.properties.input,
                  transaction_index: t.properties.transaction_index,
                  gas: t.properties.gas,
                  gas_used: t.properties.gas_used,
                  gas_price: t.properties.gas_price,
                  transaction_fee: t.properties.transaction_fee,
                  block_number: t.properties.block_number,
                  block_hash: t.properties.block_hash,
                  block_timestamp: t.properties.block_timestamp
              }))
          }
      };

      res.json(walletData);
  } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, error: 'Internal Server Error' });
  } finally {
      session.close();
  }
});



// //test 3
// app.get('/api/wallet/:walletId', async (req, res) => {
//   const session = driver.session();
//   const walletId = req.params.walletId;
  
//   try {
//       const result = await session.run(
//           `
//           MATCH (w:Wallet {addressId: $walletId})-[:Transaction]-(t)
//           RETURN w.addressId as walletId, collect(t) as transactions
//           `,
//           { walletId: walletId }
//       );
//       res.json({ status: 200, result: result.records });
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ status: 500, error: 'Internal Server Error' });
//   } finally {
//       session.close();
//   }
// });


// //test 4
// // Endpoint to get wallet details and transactions
// app.get('/api/wallet/:walletId', async (req, res) => {
//   const session = driver.session();
//   try {
//       const walletId = req.params.walletId;

//       // Query to get wallet details and transactions
//       const result = await session.run(
//           `
//           MATCH (w:Wallet {addressId: $walletId})-[:Transaction]-(t)
//           RETURN w.addressId as walletId, collect(t) as transactions
//           `,
//           { walletId: walletId }
//       );

//       if (!result.records.length) {
//           return res.status(404).json({ status: 404, error: 'Wallet not found' });
//       }

//       const record = result.records[0];
//       const walletData = {
//           status: 200,
//           content: {
//               walletId: record.get('walletId'),
//               transactions: record.get('transactions').map(t => ({
//                   from: t.properties.from_address,
//                   to: t.properties.to_address,
//                   hash: t.properties.hash,
//                   value: t.properties.value,
//                   input: t.properties.input,
//                   transaction_index: t.properties.transaction_index,
//                   gas: t.properties.gas,
//                   gas_used: t.properties.gas_used,
//                   gas_price: t.properties.gas_price,
//                   transaction_fee: t.properties.transaction_fee,
//                   block_number: t.properties.block_number,
//                   block_hash: t.properties.block_hash,
//                   block_timestamp: t.properties.block_timestamp
//               }))
//           }
//       };

//       res.json(walletData);
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ status: 500, error: 'Internal Server Error' });
//   } finally {
//       session.close();
//   }
// });


//test other conneected nodes
//testing the address details
// ... (your existing code)