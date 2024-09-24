const express = require('express');
const router = express.Router();
const { getData } = require('../controllers/dataController');

// Definir ruta para obtener datos
router.get('/data', getData);

module.exports = router;
