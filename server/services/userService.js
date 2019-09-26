const User = require("../db/connection").users;
var session = require('express-session');

// The Service uses the Sequelize ORM for DB CRUD operations
// and returns results to the calling Controller

var userService = {};

userService.list = () => {
    return User.findAll()
        .then(users => {
            return users;
        })
        .catch(error => {
            throw error;
        })
}; 

userService.register = (userObj) => {
    console.log("userServices")
    console.log(userObj)
    return User
        .create(userObj)
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

userService.signin = (userObj) => {
    return User.findOne(
    {
        where: userObj
    })
    .then(user => {
        if (user != null) {
          return user ;
        } else {
            return false;
        }
    })
    .catch(error => {
        throw error;
    })
}

userService.update = (userObj) => {
    return User.update({ user_name: userObj.user_name, user_password: userObj.user_password, email: userObj.email, is_admin: userObj.is_admin }, { where: { id: userObj.id } })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

userService.getUserInfo = (userId) => {
    return User.findByPk(userId)
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};


userService.delete = (userId) => {
    return User.destroy({ where: { id: userId } })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        });
};

module.exports = userService;