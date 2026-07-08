const express = require('express');
const route = express.Router();
const UserController = require('../controller/user');
 
route.post('/login', UserController.login);
 
module.exports = route;