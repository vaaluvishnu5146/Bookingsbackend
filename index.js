// run `node index.js` in the terminal
// STEP 1: IMPORT ALL NECESSARY PACKAGES
const express = require('express');
const HTTP_SERVER = express();
const cors = require('cors');

HTTP_SERVER.use(cors());

// BASIC SERVER CONFIS
const port = 5000;

HTTP_SERVER.listen(port, 'localhost', () => {
  console.log('SERVER STARTED IN THE PORT', port);
});

HTTP_SERVER.use('/', require('./app'));
