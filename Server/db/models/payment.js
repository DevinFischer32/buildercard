const Sequelize = require('sequelize')
const db = require('../db')

const Payment = db.define('payments', {
  payment_id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
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
  user_id,
  loan_id,
})

module.exports = Payment
