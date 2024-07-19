const Sequelize = require('sequelize')
require('dotenv').config();

const connection = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    dialect: "mysql", 
    host: process.env.MYSQL_HOST,
});
module.exports = connection

// Sem ORM
// const mysql = require('mysql/promise')
// const connection = mysql.createPoll({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     pass: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DB,
// });
// module.exports = connection

