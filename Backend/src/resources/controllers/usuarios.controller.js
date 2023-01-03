import { usuarioModel } from '../model/usuarios.model.js';


export const createUsuario = async ( req, res ) => {
  const body = req.body
  const newUsuario = await usuarioModel.create( body )
  res.json( newUsuario )
}

export const getUsuarios = async ( req, res ) => {
  const usuarios = await usuarioModel.find()
  res.json( usuarios )
}

export const getUsuarioById = async ( req, res ) => {
  const id = req.params.id
  const usuario = await usuarioModel.findById( id )
  res.json( usuario )
}

export const updateUsuarioById = async ( req, res ) => {
  const body = req.body
  const id = req.params.id
  const usuarioUpdated = await usuarioModel.findByIdAndUpdate( id, body, { new: true } )
  res.json( usuarioUpdated )
}

export const deleteUsuarioById = async ( req, res ) => {
  const id = req.params.id
  const usuarioRemoved = await usuarioModel.findByIdAndDelete( id )
  res.json( usuarioRemoved )
}