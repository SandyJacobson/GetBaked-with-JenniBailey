const { db } = require('../db/connection')
const faker = require('faker')

async function generateCustomer () {
  const SQL = `INSERT INTO customers (
    entry_date,
    first_name,
    last_name,
    phone_number
  ) VALUES (
    NOW(),
    '${faker.name.firstName()}',
    '${faker.name.lastName()}',
    '${faker.phone.phoneNumberFormat().replace(/-/g, '')}'
  ) RETURNING objid `

  const [results] = await db.any(SQL)
  return results
}

async function generateCustomerData (id) {
  /**
   * id: The primary key of the user record associated with
   * the customer data
   */

  const SQL = `INSERT INTO customer_data (
      customer_id,
      address,
      city,
      state,
      zip
    ) VALUES (
      ${id},
      '${faker.address.streetAddress()}',
      '${faker.address.city()}',
      '${faker.address.stateAbbr()}',
      '${faker.address.zipCode()}'
    ) RETURNING *`

  try {
    const [results] = await db.any(SQL)
    return results
  } catch (e) {
    console.log(e)
  }
}

async function generateAccountInfo (id) {
  /**
   * id: The primary key of the user record associated with
   * the account info
   */
  const SQL = `INSERT INTO account_info (
      customer_id,
      username,
      email,
      password
    ) VALUES (
      ${id},
      '${faker.internet.userName()}',
      '${faker.internet.email()}',
      '${faker.internet.password()}'
    ) RETURNING *`

  try {
    const [results] = await db.any(SQL)
    return results
  } catch (e) {
    console.log(e)
  }
}

async function generateUser () {
  try {
    const userid = await generateCustomer()
    const customer = await generateCustomerData(userid.objid)
    const accountinfo = await generateAccountInfo(userid.objid)
    console.log(`User: ${JSON.stringify(userid, null, 2)}`)
    console.log(`Customer Info: ${JSON.stringify(customer, null, 2)}`)
    console.log(`User Account Info: ${JSON.stringify(accountinfo, null, 2)}`)
  } catch (e) {
    console.log(e)
  } finally {
    db.$pool.end()
  }
}

const run = async () => {
  generateUser()
}

run()
