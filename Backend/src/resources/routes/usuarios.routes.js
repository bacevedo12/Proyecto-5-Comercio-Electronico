import { Router } from 'express'
import { signin, createUsuario, deleteUsuarioById, getUsuarioById, getUsuarios, updateUsuarioById } from '../controllers/usuarios.controller.js'


const auth = require("../auth/auth");

router.get("/all", auth, findAll);
router.get("/one", auth, findOne);

router.post("/signup", signup);
router.post("/signin", signin)

module.exports = router;

const usuariosRouter = Router()


const baseURI = '/usuarios'

usuariosRouter.post( baseURI, createUsuario )
usuariosRouter.get( baseURI, getUsuarios )
usuariosRouter.get( `${ baseURI }/:id`, getUsuarioById )
usuariosRouter.put( `${ baseURI }/:id`, updateUsuarioById )
usuariosRouter.delete( `${ baseURI }/:id`, deleteUsuarioById )

usuariosRouter.post(`${ baseURI }/signin`, signin)


export default usuariosRouter