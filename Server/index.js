const express = require('express')
const cors = require('cors')
require('dotenv').config()

const ctrl = require('./Controllers/auth')

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())

app.post('/register', ctrl.register)

app.listen(PORT, (req, res) => {
  console.log(`Server running on port: ${PORT}`)
})
