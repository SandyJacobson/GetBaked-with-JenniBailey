const postgres = require('postgres')
const sql = postgres(`postgres://${$DB_USER}:${DB_PW}@${DB_HOST}:${DB_PORT}/${DB}`)

module.exports = {
  sql
}