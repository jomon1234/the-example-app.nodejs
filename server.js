const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World From NodeJS!'));

// Update the following line to bind to all network interfaces
app.listen(port, '0.0.0.0', () => console.log(`Example app listening at http://0.0.0.0:${port}`));
