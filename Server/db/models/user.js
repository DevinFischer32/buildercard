const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  first_name: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    alloWNull: false,
    validate: {
      isEmail: true,
    },
  },
  hash: {
    type: Sequelize.STRING,
    validate: {
      min: 6,
    },
    allowNull: false,
  },
})

module.exports = User
