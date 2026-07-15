const express = require('express');
const route = express.Router();
const UserController = require('../controller/user');
const Authentication = require('../authentication/auth');

route.post('/login', UserController.login);

route.put('/update', Authentication.auth, UserController.updateUser);

route.get('/self', Authentication.auth, (req, res) => {
    return res.status(200).json({
        user: req.user
    })
})

module.exports = route;