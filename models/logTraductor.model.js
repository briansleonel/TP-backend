const mongoose = require('mongoose');   //importar mongoose

const { Schema } = mongoose;

//crear el esquema
const LogTraductorSchema = new Schema({
    textoOrigen: { type: String, required: true },
    idiomaOrigen: { type: String, required: true },
    textoDestino: { type: String, required: true },
    idiomaDestino: { type: String, required: true }
});

//exportar modulo
module.exports = mongoose.model('LogTraductorModel', LogTraductorSchema);