const express = require("express");
const APP_SERVER = express();
const { tokenGate } = require("./Middleware/AuthGates");

// REGISTER ALL THE CONTROLLER IN APP SERVER
APP_SERVER.use("/files", tokenGate, require("./Controllers/Files.controller"));
APP_SERVER.use("/todos", tokenGate, require("./Controllers/Todos.controller"));
APP_SERVER.use("/users", tokenGate, require("./Controllers/Users.controller"));
APP_SERVER.use("/mahal", tokenGate, require("./Controllers/Mahal.controller"));
APP_SERVER.use("/auth", require("./Controllers/Auth.controller"));

module.exports = APP_SERVER;
