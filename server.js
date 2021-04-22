const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
// const db = require('./db/connection')
const inventory = require('./routes/inventory')

// const appRoutes = require('./routes/appRoutes')
// const db = require('./db/connection')
const PORT = process.env.PORT || 3000
const SERVER = process.env.HOST || 'localhost'

const app = express()

// app.use(bodyParser.json())
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use('/api', inventory)

app.get('/', (req, res) => {
  res.send("<h1>Jenni's Bakery API</h1>")
})

// app.get('/inventory', async (req, res) => {
//   const data = await controllers.getInventory()
//   res.json(data)
// })

// app.get('/inventory/category/:category', async (req, res) => {
//   const data = await controllers.getInventoryByCategory(req.params.category)
//   res.json(data)
// })

// app.get('/inventory/itemname/:name', async (req, res) => {
//   const data = await controllers.getInventoryByName(req.params.name)
//   res.json(data)
// })

// app.get('/inventory/id/:id', async (req, res) => {
//   const data = await controllers.getInventoryById(req.params.id)
//   console.log(`${req.params.id}`)
//   res.json(data)
// })







app.listen(PORT, SERVER, () => console.log(`Listening on port: ${PORT} at ${SERVER}`))
