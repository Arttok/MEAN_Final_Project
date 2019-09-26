// require new custom Service Module
var userService = require('../services/userService');
var express = require('express');
var session = require('express-session')

var userController = {};


// GET: http://localhost:3000/update/user/
userController.getUserInfo = (req, res) => {
    userService.getUserInfo(session.user_id)
    .then((user) => {
        if (user) {   
            let data = [user.id, user.user_name, user.user_password, user.email, user.is_admin]
            console.log(data)
            res.send(data);
        } else {
            res.status(403).send("fail");
        }
    })
    .catch((err) => {
        console.log(err)
    });
}

module.exports = userController;