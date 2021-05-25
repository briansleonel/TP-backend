const PersonaModel = require('../models/persona.model')

const personaController = {};

personaController.getPersonas = async (req, res) => {
    var personas = await PersonaModel.find();
    res.json(personas);
}

personaController.addPersona = async (req, res) => {
    var persona = new PersonaModel(req.body);
    try {
        await persona.save();
        res.json({
            'status' : '1',
            'msg' : 'Persona guardada'
        })
    } catch (error) {
        res.json({
            'status' : '0',
            'msg' : 'Error, no se guardó la persona'
        })
    }
}

personaController.getPersona = async (req, res) => {
    var persona = await PersonaModel.findById(req.params.id);
    res.json(persona);
}

module.exports = personaController;