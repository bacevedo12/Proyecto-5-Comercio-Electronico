const usuarios = []
  
  export const createUsuario = ( req, res ) => {
    const body = req.body
    usuarios.push( body )
    res.json( body )
  }
  
  export const getUsuarios = ( req, res ) => {
    res.json( usuarios )
  }
  
  export const getUsuarioById = ( req, res ) => {
    const id = req.param.id
    const usuario = usuarios.find( usuario => usuario.id === id )
    res.json( usuario )
  }
  
  export const updateUsuarioById = ( req, res ) => {
    const body = req.body
    const id = req.param.id
    const usuarioIndex = usuarios.findIndex( usuario => usuario.id === id )
    usuarios[ usuarioIndex ] = body
    res.json( usuarios[ usuarioIndex ] )
  }
  
  export const deleteUsuarioById = ( req, res ) => {
    const id = req.param.id
    const usuarioIndex = usuarios.findIndex( usuario => usuario.id === id )
    const usuarioRemoved = usuarios.splice( usuarioIndex, 1 )[ 0 ]
    res.json( usuarioRemoved )
  }