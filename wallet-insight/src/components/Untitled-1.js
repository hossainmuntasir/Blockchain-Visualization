app.get('/api/wallets', async (req, res) => {
//   console.log('Received request at /api/wallets'); // Log when a request is received
//   const session = driver.session();
  
//   try {
//     const result = await session.run('MATCH (n:Wallet) RETURN n LIMIT 10');
//     const wallets = result.records.map(record => record.get(0).properties);
//     console.log(wallets); // Log the retrieved wallets
//     res.send(wallets);
//   } catch (error) {
//     console.error(error); // Log errors to the console
//     res.status(500).send(error);
//   } finally {
//     await session.close();
//   }
// });
