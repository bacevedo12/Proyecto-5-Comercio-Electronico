import express from 'express';
import { startConnection } from './config/database.config.js';
import environment from './config/environment.js';
import usuariosRouter from './resources/routes/usuarios.routes.js';
import menuRouter from './resources/menu/routes/menu.routes.js';
import cors from 'cors';

// Se crea una instancia de una aplicación express
const app = express();

// Iniciamos la conexión a la base de datos
startConnection()

// Se configura un middleware para aceptar requests de tipo JSON
app.use( express.json() )

app.use(cors({origin:'*'}));

// Se agrega una ruta (endpoint) por defecto
app.get( '/', function ( req, res ) {
 res.json( { message: "hola mundo" } );
} );

// Se agrega el endpoint de products
app.use( usuariosRouter )
app.use( menuRouter )

// Se inicia la aplicación y se queda escuchando requests
console.log( `APLICATION INICIARÁ EN EL PUERTO: ${ environment.PORT }` )
app.listen( environment.PORT );