const { db } = require('../db/connection')

async function createProduct (item) {
  try {
    const results = await db`
      INSERT INTO products (
        product_name,
        product_category,
        price,
        quantity_at_price,
        product_code
        )
      VALUES
      (
        ${item.name},
        ${item.category},
        ${item.price},
        ${item.quantity_at_price},
        ${item.product_code}
      )
    `
  } catch (e) {
    console.log(e)
  } finally {
    db.end()
  }


}

async function updateProduct (id, data) {
  const updateClause = Object.keys(data).map(key => {
    return `${key} = ${data[key]}`
  })

  const SQL = `UPDATE products set ${updateClause.join(',').replace("'","")} WHERE objid = ${id}`
}

async function deleteProduct (id) {

}

async function getProduct (id) {}

async function getProducts () {}






const testdata = {
  name: 'crispy treats',
  category: 'rice crispy treats',
  price: 10,
  quantity_at_price: 6,
  product_code: 'rct'
}

createProduct(item)
