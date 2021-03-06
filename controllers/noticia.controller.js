//import NoticiaModel from '../models/noticia.model';
const NoticiaModel = require("../models/noticia.model");

//File System para gestionar archivos en base64
const fs = require('fs');

const noticiaController = {};

noticiaController.getNoticias = async (req, res) => {

    var criterios = {}

    if(req.query.vigente != 'null')
        criterios.vigente = req.query.vigente;

    var noticias = await NoticiaModel.find(criterios);
    res.json(noticias);

  /*
    var criterios = {};
    var pasajes;

    if(req.query.categoriaPasajero != '')
        criterios.categoriaPasajero = req.query.categoriaPasajero

    pasajes = await pasajeModel.find(criterios).populate('pasajero');
  */
};

noticiaController.addNoticia = async (req, res) => {
    var noticia = new NoticiaModel(req.body);
    
    try {
        await noticia.save();
        res.json({
            'status' : '1',
            'msg' : 'Noticia guardada'
        })
    } catch (error) {
        res.json({
            'status' : '0',
            'msg' : 'Error: ' + error
        })
    }
};

noticiaController.getNoticia = async (req, res) => {
    var noticia = await NoticiaModel.findById(req.params.id);
    res.json(noticia);
}

noticiaController.editNoticia = async (req, res) => {
    var noticia = new NoticiaModel(req.body);
    try {
        await NoticiaModel.updateOne({_id : req.body._id}, noticia);
        res.json({
            'status' : '1',
            'msg' : 'Noticia actualizada'
        })
    } catch (error) {
        res.json({
            'status' : '0',
            'msg' : 'Error, no se pudo guardar la noticia'
        })
    }
}

noticiaController.deleteNoticia = async (req, res) => {
    try {
        await NoticiaModel.deleteOne({_id: req.params.id});
        res.json({
            'status' : '1',
            'msg' : 'Noticia eliminada'
        })
    } catch (error) {
        res.json({
            'status' : '0',
            'msg' : 'Error, no se pudo eliminar la noticia'
        })
    }
}

//exporto el módulo
module.exports = noticiaController;
