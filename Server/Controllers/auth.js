require('dotenv').config()
const db = require('../db/db')
const bcrypt = require('bcryptjs')
const { User } = require('../db/models')

module.exports = {
  register: async (req, res) => {
    const { first_name, last_name, username, email, password } = req.body

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    res.status(200).send('Success')
  },
  login: async (req, res) => {
    const { email, password } = req.body
  },
}
