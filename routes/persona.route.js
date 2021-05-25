const personaController = require('../controllers/persona.controller');

//instanciar el manejador de rutas
const express = require('express');
const router = express.Router();

//definciion de las rutas
router.get('/', personaController.getPersonas);
router.post('/', personaController.addPersona);
router.get('/:id', personaController.getPersona);

module.exports = router;