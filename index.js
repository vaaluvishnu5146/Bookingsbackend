// run `node index.js` in the terminal
// STEP 1: IMPORT ALL NECESSARY PACKAGES
const express = require('express');
const HTTP_SERVER = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// CONFIGURING CORS
HTTP_SERVER.use(cors());

// CONFIGURING BODY-PARSER
HTTP_SERVER.use(bodyParser.json());
// parse application/x-www-form-urlencoded
HTTP_SERVER.use(bodyParser.urlencoded({ extended: false }));

// BASIC SERVER CONFIGS
const port = 5000;

HTTP_SERVER.listen(port, 'localhost', () => {
  console.log('SERVER STARTED IN THE PORT', port);
});

// INJECTING API SERVER
HTTP_SERVER.use('/', require('./app'));
