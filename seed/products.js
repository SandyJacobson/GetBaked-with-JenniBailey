const path = require('path')
require('dotenv').config({
  path: path.resolve('../.env')
})

const postgres = require('postgres')
const faker = require('faker')


const db = postgres({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB,
  username: process.env.DB_USER,
  pass: process.env.DB_PW
})

async function generateCustomer () {
  const [results] = await db`
    INSERT INTO customer (
      first_name,
      last_name,
      phone_number
    ) VALUES (
      '${faker.name.firstName()}',
      '${faker.name.lastName()}',
      '${faker.phone.phoneNumber()}'
    )

    returning *
  `
  db.end()
  return results
}

async function generateCustomerData (id) {
  /**
   * id: The primary key of the user record associated with
   * the customer data
   */

  const [results] = await db`
    INSERT INTO customer_data
    (
      customer_id,
      address,
      city,
      state,
      zip
    ) VALUES (
      ${id},
      '${faker.address.streetAddress()}',
      '${faker.address.city()}',
      '${faker.address.state()}',
      '${faker.address.zipCode()}',
    )

    returning *
  `
  db.end()
  return results
}

async function generateAccountInfo (id) {
  /**
   * id: The primary key of the user record associated with
   * the account info
   */
  const [results] = db`
    INSERT INTO account_info
    (
      customer_id
      username,
      email,
      password
    ) VALUES (
      ${id},
      ${faker.internet.userName()},
      ${faker.internet.email()},
      ${faker.internet.password()},
    )

    returning *
  `
  db.end()
  return results
}

async function generateUser () {
  const userid = (await generateCustomer()).objid
  const customer = await generateCustomerData(userid)
  const accountinfo = await generateAccountInfo(userid)

  console.log(`User: ${userid}`)
  console.log(`${customer}`)
  console.log(`${accountinfo}`)
}

// generateUser()

// const run = async () => {
//   await generateCustomer()
// }

// run()
