const connection = require('./connection')
const Sequelize = require('sequelize')

const Task = connection.define("tasks", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});


// connection.sync({force: true})

module.exports = Task