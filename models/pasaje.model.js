const mongoose = require('mongoose');
const PersonaModel = require('./persona.model');
const {Schema} = mongoose;

const PasajeSchema = new Schema({
    precioPasaje: {type: Number, required: true},
    categoriaPasajero: {type: String, required: true},  //m = Menor, a = Adulto, j= Jubilado
    fechaCompra: {type: String, required: true},
    pasajero: {type: Schema.Types.ObjectId, ref: PersonaModel, required: true}
});

module.exports = mongoose.model('PasajeModel', PasajeSchema);