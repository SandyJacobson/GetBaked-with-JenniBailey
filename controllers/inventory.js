const { db } = require('../db/connection')

/** Get all inventory items */
async function getInventory () {
  const SQL = `SELECT * FROM PRODUCTS`
  const results = await db.any(SQL)
  console.log(results)
  // db.$pool.end()
  return results
}

async function getInventoryByCategory (category) {

}

async function getInventoryByName (name) {

}

async function getInventoryById (id) {

}

module.exports = {
  getInventory
}
