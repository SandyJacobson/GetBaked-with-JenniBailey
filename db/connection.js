const path = require('path')
require('dotenv').config({
  path: path.resolve('.env')
})

const pg = require('pg-promise')()
const cn = `postgres://${process.env.DB_USER}:${process.env.DB_PW}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB}`
const db = pg(cn)
// const db = postgres(`postgres://${process.env.DB_USER}:${process.env.DB_PW}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB}`)
// const db = postgres({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: process.env.DB,
//   username: process.env.DB_USER,
//   password: process.env.DB_PW
// })

const test = async () => {
  let results
  try {
    results = await db.any('select * from products')
  } catch (e) {
    console.log(e)
  } finally {
    db.$pool.end()
  }
  results.forEach(x => console.log(`${x.product_name}, ${x.quantity_at_price} for \$${x.price}`))
}

// test()
module.exports = {
  db
}
