require('dotenv').config()
const express = require('express')
const cors = require('cors')
const db = require('./db/db')

const ctrl = require('./Controllers/auth')

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())

app.post('/register', ctrl.register)

app.listen(PORT, (req, res) => {
  db.authenticate()
    .then(() => {
      console.log('DB Connected')
    })
    .catch((err) => console.log(err))
  console.log(`Server running on port: ${PORT}`)
})
