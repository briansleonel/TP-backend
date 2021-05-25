const pasajeModel = require('../models/pasaje.model');

const pasajeController = {};

pasajeController.getPasajes = async (req, res) => {
    var criterios = {};
    var pasajes;

    if(req.query.categoriaPasajero != '')
        criterios.categoriaPasajero = req.query.categoriaPasajero

    pasajes = await pasajeModel.find(criterios).populate('pasajero');

    res.json(pasajes);
}

pasajeController.addPasaje = async (req, res) => {
    var pasaje = new pasajeModel(req.body);
    try {
        pasaje.save();
        res.json({
            'status' : '1',
            'msg' : 'Pasaje guardado'
        })
    } catch (error) {
        res.json({
            'status' : '0',
            'msg' : 'Error no se guardo el pasaje'
        })
    }
}

pasajeController.deletePasaje = async (req, res) => {
    try {
        await pasajeModel.deleteOne({_id : req.params.id});
        res.json({
            'status' : '1',
            'msg' : 'Pasaje eliminado'
        })
    } catch (error) {
        res.json({
            'status' : '0',
            'msg' : 'Error no se pudo eliminar el pasaje'
        })
    }
}

pasajeController.editPasaje = async (req, res) => {
    var pasaje = new pasajeModel(req.body);
    try {
        await pasajeModel.updateOne({_id: req.body._id}, pasaje);
        res.json({
            'status' : '1',
            'msg' : 'Pasaje actualizado'
        })
    } catch (error) {
        res.json({
            'status' : '0',
            'msg' : 'No se puedo modificar el pasaje'
        })
    }
}

pasajeController.getPasajesByCategoriaPasajero = async (req, res) => {
    var pasajes = await pasajeModel.find({    
        categoriaPasajero: req.params.categoriaPasajero
    })
    res.json(pasajes);
}

module.exports = pasajeController;