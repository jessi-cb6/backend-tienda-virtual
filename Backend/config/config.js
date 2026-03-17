require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || '127.0.0.1', // Cambia DB_PORT por DB_HOST
    port: process.env.DB_PORT || 3307,        // Agrega esta línea para el puerto
    dialect: 'mysql'
  }
}