const mongoose = require("mongoose");

const Usuario = mongoose.model(
  "Usuario",
  new mongoose.Schema({
    nombre_usuario:{
      type: String,
      unique: true
    },
    contrasena: String,
    Email: String
   
  })
);

module.exports = Usuario;