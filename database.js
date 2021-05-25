const mongoose = require("mongoose");

const URI = "mongodb://localhost/TP5-GonzalezBrianLeonel"; //establezco la URI a la BD

mongoose
  .connect(URI)
  .then((db) => console.log("Database is connected"))
  .catch((err) => console.log(err)); //realizo la conexión

module.exports = mongoose;    //exporto mongoose