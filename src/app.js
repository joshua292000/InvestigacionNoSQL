const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const config  = require('./config');
const cors = require('cors');


const usuarioRouters = require("./routes/usuario.routes");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(`/api/${config.API_VERSION}`, usuarioRouters);


module.exports = app;