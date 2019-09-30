// require new custom Service Module
var userService = require('../services/userService');
var express = require('express');
var session = require('express-session')

var UserController = {};

// GET: http://localhost:3000/users/
UserController.list = (req, res) => {
    userService.list()
        .then((user) => {
            if (user) {
                res.json(user);
            } else {
                res.end('No Users found.');
            }
        })
        .catch((err) => {
            console.log(`Listing Users error: ${err}`);
            res.end('Listing Users error.');
        });
};

// PUT: http://localhost:3000/users/
UserController.update = (req, res) => {    
    console.log(req.body.id)
    console.log(req.body.user_name)
    console.log(req.body.email)
    userService.update({
            id: req.body.id,
            user_name: req.body.user_name,
            email: req.body.email
        })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(`Updating User error: ${err}`);
            res.end('Updating User error.');
        });
};

// POST: http://localhost:3000/users/register/
UserController.register = (req, res) => {
    userService.register({
            user_name: req.body.user_name,
            user_password: req.body.user_password,
            email: req.body.email,
            is_admin: req.body.is_admin
        })
        .then((user) => {
            console.log("working")
            res.json(user);
        })
        .catch((err) => {
            console.log(`Creating User error: ${err}`);
            res.end('Creating User error.');
        });
};

// DELETE: http://localhost:3000/users/{user_id} 
UserController.delete = (req, res) => {
    console.log("Hello!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    console.log(req.params.user_id)
    userService.delete(req.params.user_id)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(`Deleting User error: ${err}`);
            res.end('Deleting User error.');
        });
};

UserController.signin = (req, res) => {
    console.log(req.body.user_name);
    console.log(req.body.user_password);
    var user_name = req.body.user_name;
    var user_password = req.body.user_password;
    if (user_name == null || user_name == '' || user_password == null || user_password == '') {
        res.json({
            'success': false,
            'msg': 'Bad Input: Missing login data.'
        });
    } else {
        userService.signin({
            user_name, user_password})        
        .then((user) => {
            if (user != false)
            {   
                res.json(user); 
                session.user_id = user.id;
                session.admin = user.is_admin;
            } else {
                res.json({ "error": "No User found" });
            }
        })
        .catch((err) => {
            console.log(err)
        });
    }
};

module.exports = UserController;