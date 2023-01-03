import mongoose from 'mongoose'


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

// Se crea la instancia del modelo.
export const usuarioModel = new mongoose.model( 'usuario', usuarioSchema )