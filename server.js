const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const db = require('./db/connection')
// const inventory = require('./routes/inventory')
const controllers = require('./controllers/inventory')

// const appRoutes = require('./routes/appRoutes')
// const db = require('./db/connection')
const PORT = process.env.PORT || 3000
const SERVER = process.env.HOST || 'localhost'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

app.get('/inventory', async (req, res) => {
  const data = await controllers.getInventory()
  res.json(data)
})

// app.get('/', (req, res) => {
//   res.send("<p> Some data</p>")
// })

app.listen(PORT, SERVER, () => console.log(`Listening on port: ${PORT} at ${SERVER}`))
