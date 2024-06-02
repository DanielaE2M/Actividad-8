// Aplicacion de Express para la gestión de rutas

const express = require('express');

//Creación de la aplicación

const app = express();
app.use(express.json());

//Rutas
app.use('/api', require('./routes/api'));

//Middleware de error

app.use((err, req, res, next) => {
    res.status(500).json({error: err.message});
})
module.exports = app;