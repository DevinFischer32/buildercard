const Sequelize = require('sequelize')
const db = require('../db')

const Loans = db.define('loans', {
  loan_id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    alloWNull: false,
  },
  description: {
    type: Sequelize.STRING(255),
    alloWNull: false,
  },
  amount: {
    type: Sequelize.DECIMAL(18, 2),
    alloWNull: false,
  },
  approved: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
})

module.exports = Loans
