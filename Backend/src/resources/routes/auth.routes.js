import { Router } from 'express'

import {auth} from '../../../auth/auth.js';
import { createUsuario, signin } from '../controllers/usuarios.controller.js';


const authRouter = Router()
const baseURI = '/auth';

//authRouter.get(`${ baseURI }/all`, auth, findAll);
//authRouter.get(`${ baseURI }/one`, auth, findOne);

authRouter.post(`${ baseURI }/signup`, createUsuario);
authRouter.post(`${ baseURI }/signin`, signin)



export default authRouter