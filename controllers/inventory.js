const conn = require('../db/connection')

// function getInventory (id=null, name=null, category=null) {
//   const input = (id) ? id : ((name) ? name : ((category) ? category : null))
//   // if (id === null && name === null && category === null) {
//   //   //return all inventory items
//   // } else if 
//   // switch ()
// }




/** Get all inventory items */
async function getInventory() {
  const results = await db`
    SELECT * FROM INVENTORY
  `
  console.log(results)
}

async function getInventoryByCategory (category) {

}

async function getInventoryByName (name) {

}

async function getInventoryById (id) {

}

getInventory()