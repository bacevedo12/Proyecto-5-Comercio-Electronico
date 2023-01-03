import { Router } from 'express'
import { createUsuario, deleteUsuarioById, getUsuarioById, getUsuarios, updateUsuarioById } from '../controllers/usuarios.controller.js'


const usuariosRouter = Router()


const baseURI = '/usuarios'

usuariosRouter.post( baseURI, createUsuario )
usuariosRouter.get( baseURI, getUsuarios )
usuariosRouter.get( `${ baseURI }/:id`, getUsuarioById )
usuariosRouter.put( `${ baseURI }/:id`, updateUsuarioById )
usuariosRouter.delete( `${ baseURI }/:id`, deleteUsuarioById )

export default usuariosRouter