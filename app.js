const express = require('express');
const { connectDB } = require('./connection/db');
const dataRoutes = require('./routes/dataRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Conectar a la base de datos
connectDB();

// Middleware para rutas
app.use('/api', dataRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
