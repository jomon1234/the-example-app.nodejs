const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Docker World!');
});

app.listen(port, '127.0.0.1', () => {
  console.log(`Server listening on port ${port}`);
});
