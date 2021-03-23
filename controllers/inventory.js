const { db } = require('../db/connection')

async function executeSQL (sql) {
  const results = await db.any(sql)
  return results  
}

async function errMsg (msg = null) {
  res.status(500).json({ error: msg })
}

/** Get all inventory items */
async function getInventory (req, res) {
  // console.log(`controller.getInventory`)
  try {
    const SQL = `SELECT * FROM PRODUCTS`
    const inventory = await executeSQL(SQL)
    res.json(inventory)
  } catch (error) {
    errMsg(error.message)
  }
}

async function getInventoryByCategory (req, res) {
  try {
    const { category } = req.params
    const SQL = `SELECT * FROM products WHERE product_category LIKE '%${category}%'`
    const itemCategory = await executeSQL(SQL)
    if (itemCategory.length > 0) {
      return res.json(itemCategory)
    }
    res.status(404).json({message: `Item with category like => ${category} <= not found!`})
  } catch (error) {
    errMsg(error.message)
  }
}

async function getInventoryByName (req, res) {
  const { name } = req.params
  try {
    const SQL = `SELECT * FROM products WHERE lower(product_name) LIKE '%${name.toLowerCase()}%'`
    const itemName = await executeSQL(SQL)
    if (itemName.length > 0) {
      return res.json(itemName)
    }
    res.status(404).json({message: `Item with name like => ${name} <= not found!`})
  } catch (error) {
    errMsg(error.message)
  }
}

async function getInventoryById (req, res) {
  const { id } = req.params
  try {
    const SQL = `SELECT * FROM products WHERE objid = ${id}`
    const itemById = await executeSQL(SQL)
    if (itemById.length) {
      return res.json(itemById)
    }
    res.status(404).json({message: `Item with id => ${id} <= not found!`})
  } catch (error) {
    errMsg(error.message)
  }
}

async function addProduct (req, res) {
  try {
    const SQL = `INSERT INTO products (
      product_name,
      product_category,
      price,
      quantity_at_price,
      product_code
    ) values (
      ${req.body.productName},
      ${req.body.productCategory},
      ${req.body.productPrice},
      ${req.body.productQAP},
      ${req.body.productCode}
      ) RETURNING *`
    const product = await executeSQL(SQL)
    res.status(201).json(product)
  } catch (error) {
    errMsg(error.message)
  }
}

module.exports = {
  getInventory,
  getInventoryByCategory,
  getInventoryByName,
  getInventoryById,
  addProduct
}
