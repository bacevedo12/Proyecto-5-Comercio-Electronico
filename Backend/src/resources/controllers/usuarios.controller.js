import { usuarioModel } from '../model/usuarios.model.js';
import {getToken} from '../../../auth/jwt.js';
//const jwt = require("../auth/jwt.js");


export const createUsuario = async ( req, res ) => {
  try{
    const user  = new usuarioModel(req.body);
    user.hashPassword(req.body.password);
    let resultado;
    user.save().then((data) => resultado = data);
    return res.json ({
      msg: "persona creada",
      details: resultado
    });
  }catch (error) {
    console.log(error);
    return res.json({
     msg: "ocurrio un error",
     details: error.message
    });
 } 
}


//   const body = req.body
//   const newUsuario = await usuarioModel.create( body )
//   res.json( newUsuario )
// }

export const getUsuarios = async ( req, res ) => {
  try {
    const usuarios = await usuarioModel.find()
    res.json({usuarios});
  }catch (e) {
    return res.json ({
      msg: "error",
      details: e.message
    });
  }
  
}

export const getUsuarioById = async ( req, res ) => {
  try{
    const id = req.params.id
    const usuario = await usuarioModel.findById( id )
    return res.json({usuario});
  }catch (e) {
    return res.json ({
      msg: "error",
      details: e.message
    });
  }
  
};

export const updateUsuarioById = async ( req, res ) => {
 try {
  const body = req.body
  const id = req.params.id
  const usuarioUpdated = await usuarioModel.findByIdAndUpdate( id, body, { new: true } )
  res.json({usuarioUpdated});
 }catch (e) {
  return res.json ({
    msg: "error",
    details: e.message
  });
}
  
};

export const deleteUsuarioById = async ( req, res ) => {
  try {
    const id = req.params.id
    const usuarioRemoved = await usuarioModel.findByIdAndDelete( id )
    res.json({usuarioRemoved});
  }catch (error) {
    console.log(error);
    return res.json({
     msg: "ocurrio un error",
     details: error.message
    });
 } 
  
}

/* parte signin*/

export const signin = async (req, res) => {
  try {
    const filter = {
      username: req.body.username,
      // password: req.body.password,
      //active: true
    }
    console.log (req.body)
    const u = await usuarioModel.findOne(filter);
    if (u && u?.validPassword(req.body.password)) {
      return res.json({
        msg: "ok",
        token: getToken(req.body.username)
      });
    } else {
      console.warn("intento de ingreso no autorizaado!! ");
      return res.status(401).json({
        msg: "unauthorized",
        details: "this user is not authorized for this endpoint"
      })
    }
  } catch (error) {
    return res.json({
      msg: "error en autenticación",
      details: error.message
    })
  }
}
