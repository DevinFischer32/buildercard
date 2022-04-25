require('dotenv').config()
const Sequelize = require('sequelize')

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PWD,
  {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    pool: {
      max: 20,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
)

module.exports = db
