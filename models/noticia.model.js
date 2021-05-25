//import mongoose from "mongoose";
const mongoose = require('mongoose');
const { Schema } = mongoose;

//Creo el esquema de BD
const NoticiaSchema = new Schema({
  titulo: { type: String, required: true },
  noticia: { type: String, required: true },
  img: { type: String, required: true },
  vigente: { type: Boolean, required: true },
});

//exporto
module.exports = mongoose.models.NoticiaModel || mongoose.model('NoticiaModel', NoticiaSchema);