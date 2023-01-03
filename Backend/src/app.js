import express from 'express';
import { startConnection } from './config/database.config.js';
import environment from './config/environment.js';
import usuariosRouter from './resources/routes/usuarios.routes.js';

// Se crea una instancia de una aplicación express
const app = express();

// Iniciamos la conexión a la base de datos
startConnection()

// Se configura un middleware para aceptar requests de tipo JSON
app.use( express.json() )

// Se agrega una ruta (endpoint) por defecto
app.get( '/', function ( req, res ) {
 res.json( { message: "hola mundo" } );
} );

// Se agrega el endpoint de products
app.use( usuariosRouter )

// Se inicia la aplicación y se queda escuchando requests
console.log( `APLICATION INICIARÁ EN EL PUERTO: ${ environment.PORT }` )
app.listen( environment.PORT );