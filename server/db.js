const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost/first-contact', {logging: false})

module.exports = {
  db
}
