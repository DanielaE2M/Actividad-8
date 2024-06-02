// Se crea y se levanta el servidor
const http = require('node:http');
const app = require('./src/app');

//configuracion fichero de entorno
require('dotenv').config();

//Configuracion Base de Datos
require('./src/config/db');

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

server.on('listening', () =>{
    console.log(`El servidor esta escuchado en el puerto: ${PORT}`);
})

