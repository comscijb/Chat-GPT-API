const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')

require('dotenv').config({path: '../.env'})

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

module.exports = app