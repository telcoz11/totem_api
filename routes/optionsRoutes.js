const express = require('express');
const router = express.Router();
const { getOptions } = require('../controllers/optionController');

// Ruta para obtener las opciones
router.get('/opciones', getOptions);

module.exports = router;
