//definir el controller para manejar el CRUD
const logTraductorController = require('../controllers/logTraductor.controller');

//instanciar manejador de rutas
const express = require('express');
const router = express.Router();

//definicion de rutas para gestionar logs
router.get('/', logTraductorController.getLogs);
router.post('/', logTraductorController.addLog);
router.get('/:idiomaOrigen', logTraductorController.getLogsByIdiomaOrigen);
router.get('/:idiomaOrigen/:idiomaDestino', logTraductorController.getLogsByIdiomaOrigenAndIdiomaDestino);

module.exports = router;