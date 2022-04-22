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
    console.log(findUser, 'fu')

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

    const salt = bcrypt.genSaltSync(10)
    const compareHash = bcrypt.hashSync(password, salt)

    const user = await User.findOne({ where: { username: username } })

    const compare = (ch, h) => {
      bcrypt.compare(ch, h, (res, req) => {})
    }
  },
}
