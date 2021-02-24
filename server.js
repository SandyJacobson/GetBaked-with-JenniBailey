const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan');
const appRoutes = require('./routes/appRoutes');
// const db = require('./db/connection')
const PORT = process.env.PORT || 3000
const SERVER = process.env.HOST || 'localhost'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

app.listen(PORT, SERVER, () => console.log(`Listening on port: ${PORT} at ${SERVER}`))