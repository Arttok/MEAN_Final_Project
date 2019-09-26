const connection = require("./connection");
const usersData = require("./seed_data/users.json");

connection.users.destroy({ where: {} }).then(() => {
    connection.users.bulkCreate(usersData).then(() => {
        process.exit();
    })
})