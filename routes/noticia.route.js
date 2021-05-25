//defino el controller para el manejo del CRUD
const noticiaController = require('../controllers/noticia.controller');

//se instancia el manejador de rutas
const express = require('express');
const router = express.Router();

//se define las rutas para gestionar las Noticias
router.get('/', noticiaController.getNoticias);
router.post('/', noticiaController.addNoticia);
router.get('/:id', noticiaController.getNoticia);
router.put('/:id', noticiaController.editNoticia);
router.delete('/:id', noticiaController.deleteNoticia);

//se exporta el módulo
module.exports = router;