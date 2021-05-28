const pasajeController = require('../controllers/pasaje.controller');

//instanciar controlador de rutas
const express = require('express');
const router = express.Router();

//definicion de las rutas
router.get('/', pasajeController.getPasajes);
router.get('/:id', pasajeController.getPasaje);
router.post('/', pasajeController.addPasaje);
router.delete('/:id', pasajeController.deletePasaje);
router.put('/:id', pasajeController.editPasaje);
router.get('/:categoriaPasajero', pasajeController.getPasajesByCategoriaPasajero);

module.exports = router;