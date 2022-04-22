const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('users', {
  user_id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    alloWNull: false,
  },
  first_name: {
    type: Sequelize.STRING(50),
    unique: false,
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING(50),
    unique: false,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING(25),
    unique: true,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(254),
    unique: true,
    alloWNull: false,
    validate: {
      isEmail: true,
    },
  },
  hash: {
    type: Sequelize.STRING(60),
    validate: {
      min: 8,
    },
    allowNull: false,
  },
})

module.exports = User
