const { Sequelize } = require('sequelize')


const db = new Sequelize({
    dialect : `postgres`,
    host: 'localhost',
    database: 'todo-db',
    username: 'postgres',
    password: 'root',
    port: 5432
})

db.authenticate()
    .then(() => console.log('Database Autenticada Correctamente'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('Database Sincronizada Correctamente'))
    .catch((err) => console.log(err))

module.exports = db