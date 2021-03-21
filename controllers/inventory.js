const { db } = require('../db/connection')

/** Get all inventory items */
async function getInventory () {
  const results = await db`
    SELECT * FROM PRODUCTS
  `
  console.log(results)
  db.end()
  return results
}

async function getInventoryByCategory (category) {

}

async function getInventoryByName (name) {

}

async function getInventoryById (id) {

}

getInventory()

module.exports = {
  getInventory
}
