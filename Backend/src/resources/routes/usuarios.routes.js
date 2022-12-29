import { Router } from 'express'
import { createUsuario, deleteUsuarioById, getUsuarioById, getUsuarios, updateUsuarioById } from '../controllers/usuarios.controller'


const usuariosRouter = Router()


const baseURI = '/usuarios'

UsuariosRouter.post( baseURI, createUsuario )
UsuariosRouter.get( baseURI, getUsuarios )
UsuariosRouter.get( `${ baseURI }/:id`, getUsuarioById )
UsuariosRouter.put( `${ baseURI }/:id`, updateUsuarioById )
UsuariosRouter.delete( `${ baseURI }/:id`, deleteUsuarioById )

export default usuariosRouter