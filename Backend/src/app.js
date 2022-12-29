import express from 'express';
import environment from './config/environment.js';
import usuariosRouter from './resources/routes/usuarios.routes';

const app = express();

app.use( express.json() )

app.get( '/', function ( req, res ) {
  res.json( { message: "Hola mundo" } )
} );

app.use( usuariosRouter )

console.log( `APLICATION INICIARÁ EN EL PUERTO: ${ environment.PORT }` )
app.listen( environment.PORT );
