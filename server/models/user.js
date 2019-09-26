'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        user_name: DataTypes.STRING,
        user_password: DataTypes.STRING,
        email: DataTypes.STRING,
        is_admin: DataTypes.INTEGER
    }, {});
    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
};