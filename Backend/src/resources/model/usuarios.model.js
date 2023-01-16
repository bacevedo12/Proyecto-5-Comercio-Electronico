import mongoose from 'mongoose';
import crypto from 'crypto';
import { stringify } from 'querystring';


const usuarioSchema = new mongoose.Schema( {
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  telefono: {
    type: Number,
    required: true,
  },
  email:{
    type: String,
    required:true,
  },
  username:{
    type: String,
    required:true,
  },
  password:{
    type: String,
    required:true,

  },
  salt: {
    type: String,
    required:true, 
  }
} )

usuarioSchema.methods.hashPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex")
  this.password = crypto.pbkdf2Sync(password, this.salt, 1000, 64, "sha512").toString("hex");
}

usuarioSchema.methods.validPassword = function (password) {
  
  const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, "sha512").toString("hex");
  return hash === this.password;
}


// Se crea la instancia del modelo.
export const usuarioModel = new mongoose.model( 'usuario', usuarioSchema )