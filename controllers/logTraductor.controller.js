//importo el modelo
const LogTraductorModel = require('../models/logTraductor.model');

const LogTraductorController = {};

LogTraductorController.getLogs = async (req, res) => {
    var logs;
    var criterios = {};

    if(req.query.idiomaOrigen != ''){
        criterios.idiomaOrigen = req.query.idiomaOrigen;
    }
    if(req.query.idiomaDestino != '') {
        criterios.idiomaDestino = req.query.idiomaDestino;
    } 
    
    //console.log(criterios)

    logs = await LogTraductorModel.find(criterios);

    //console.log(req.query.idiomaOrigen)
    //console.log(req.query.idiomaDestino)
    //Si tiene parámetros, se devuelve el resultado de la búsqueda
    /*
    if(req.query.idiomaOrigen != '' && req.query.idiomaDestino != '')
        logs = await LogTraductorModel.find({
            idiomaOrigen : req.query.idiomaOrigen,
            idiomaDestino : req.query.idiomaDestino
        })
    else if(req.query.idiomaOrigen != '') //si solo tiene el parámetro de consulta por idiomaOrigen
        logs = await LogTraductorModel.find({idiomaOrigen : req.query.idiomaOrigen})
    else    // de lo contrario devuelve todos los logs
        logs = await LogTraductorModel.find();
    */
    res.json(logs);
}

LogTraductorController.addLog = async (req, res) => {
    var log = new LogTraductorModel(req.body);
    try {
        await log.save();
        res.json({
            'status' : '1',
            'msg' : 'Log guardado'
        })
    } catch (error) {
        res.json({
            'status' : '0',
            'msg' : 'Error, no se pudo guardar el log'
        })
    }
}

LogTraductorController.getLogsByIdiomaOrigen = async (req, res) => {
    var logs = await LogTraductorModel.find({idiomaOrigen: req.params.idiomaOrigen});
    res.json(logs);
}

LogTraductorController.getLogsByIdiomaOrigenAndIdiomaDestino = async (req, res) => {
    console.log(req.params)
    var logs = await LogTraductorModel.find({
        idiomaOrigen : req.params.idiomaOrigen,
        idiomaDestino : req.params.idiomaDestino
    });
    res.json(logs);
}

module.exports = LogTraductorController;