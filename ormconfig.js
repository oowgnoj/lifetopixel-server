require('dotenv').config()
module.exports = {
  "type": "mysql",
  "host": process.env.RDS_URL,
  "port": process.env.RDS_PORT,
  "username": process.env.USERNAME,
  "password": process.env.PASSWORD,
  "database": process.env.DB_NAME,
  "entities": ["src/entity/*.ts"],
  "logging": true,
  "synchronize": true,
  "timezone": 'Z'
}
