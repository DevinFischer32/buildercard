require('dotenv').config()
const db = require('../db/db')
const bcrypt = require('bcryptjs')
const User = require('../db/models/user')

module.exports = {
  register: async (req, res) => {
    const { first_name, last_name, username, email, password } = req.body

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    const findUser = await User.findOne({ where: { username: username } })

    if (findUser === null) {
      await User.create({ first_name, last_name, username, email, hash })
        .then((res) => {
          res.status(201).send('Success')
        })
        .catch((err) => {
          console.log(err)
        })
    } else res.status(409).send('User Already Exists')
  },
  login: async (req, res) => {
    const { username, password } = req.body

    const user = await User.findOne({ where: { username: username } })

    if (!user) {
      return res.status(403).send('Invalid credentials')
    }

    const authenticated = bcrypt.compareSync(password, user.hash)

    if (!authenticated) {
      return res.status(403).send('Invalid credentials')
    } else {
      return res.status(200).send('Success')
    }
  },
  logout: async (req, res) => {},
}
