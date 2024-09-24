const sql = require('mssql');
require('dotenv').config();

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  server: process.env.DB_SERVER,
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

const connectDB = async () => {
  try {
    await sql.connect(sqlConfig);
    console.log('Conectado a SQL Server');
  } catch (error) {
    console.error('Error en la conexión a la base de datos', error);
  }
};

module.exports = {
  sql,
  connectDB
};
