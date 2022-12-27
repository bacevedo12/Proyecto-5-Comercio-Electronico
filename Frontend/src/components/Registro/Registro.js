import Button from 'react-bootstrap/Button';
import "./registro.css"



const Registro = () => {
    return(
        <section className="seccionRegistro">
         <main >
            <div className="formularioregistro ">
            <h1 className="m-6 tituloReserva mt-3" >Regístrate</h1>
            <br />
            <form className="text-white bg-light mb-4 ">
                <div>
                <input className="mb-3 p-1" type="text" id="nombre" name="nombre" placeholder="Nombre" />
                </div>
                <div>
                <input className="mb-3 p-1" type="text" id="apellido" name="apellido" placeholder="Apellido"/>
                </div>
                <div>
                <input className="mb-3 p-1" type="text" id="direccion" name="direccion" placeholder="Dirección"/>
                </div>
                <div>
                <input className="mb-3 p-1" type="numer" id="telefono" name="telefono" placeholder="Teléfono"/>
                </div>
                <div>
                <input className="mb-3 p-1"  type="email" id="email" name="email" placeholder="Mail"/>
                </div>
                <div>
                <input className="mb-3 p-1" type="text" id="username" name="username" placeholder="username"/>
                </div>
                <div>
                <input className="mb-3 p-1" type="text" id="password" name="password" placeholder="password"/>
                </div>
                <div>
                <Button className='mt-4 mb-4' variant="secondary" type="submit">Guardar</Button>
                </div>
            </form>
            </div>
        </main>
        </section>
    )
    }
    
    


export default Registro