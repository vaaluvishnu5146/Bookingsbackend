const express = require('express');
const APP_SERVER = express();

// REGISTER ALL THE CONTROLLER IN APP SERVER
APP_SERVER.use('/files', require('./Controllers/Files.controller'));
APP_SERVER.use('/todos', require('./Controllers/Todos.controller'));


module.exports = APP_SERVER;