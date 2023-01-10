import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema( {
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
 // img:{
   // type: Image,
    //required:true,
  //},
} )

// Se crea la instancia del modelo.
export const menuModel = new mongoose.model( 'menu', menuSchema )