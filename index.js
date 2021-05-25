var express = require("express");
var app = express();

const { mongoose } = require("./database"); //cargo la configuración de la BD
const cors = require("cors");

app.use(express.json({limit: '25mb'})); //agregar para establecer el limite de los datos
app.use(express.urlencoded({limit: '25mb'}))
app.use(cors({ origin: "http://localhost:4200" }));

//cargar el modulo de direccionamiento de rutas
app.use('/api/noticias', require('./routes/noticia.route'));  //PTO1
app.use('/api/logs-traductor', require('./routes/logTraductor.route')); //PT2
//PT3
app.use('/api/persona', require('./routes/persona.route'));
app.use('/api/pasaje', require('./routes/pasaje.route'));

//settings
app.set("port", process.env.PORT || 3000); //indico el puerto

//starting the server
app.listen( app.get("port"), () => {
  console.log("Server starter on port ", app.get("port"));
});
