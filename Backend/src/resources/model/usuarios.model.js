import mongoose from 'mongoose';
import crypto from 'crypto';

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
  mail:{
    type: String,
    required:true,
  },
  username:{
    type: String,
    required:true,
  },
  password:{
    type: String,
    require: true,

  }
} )

usuarioSchema.methods.hashPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.password = crypto.pbkdf2Sync(password, this.salt, 1000, 64, "sha512").toString("hex");
}

usuarioSchema.methods.validPassword = function (password) {
  let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, "sha512").toString("hex");
  return this.password === hash;
}


// Se crea la instancia del modelo.
export const usuarioModel = new mongoose.model( 'usuario', usuarioSchema )