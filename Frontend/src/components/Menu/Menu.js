
import './Menu.css';
import menu from './Data.js'
import Platos from "./Platos.js";
import Instrucciones from './Instrucciones.js';
import Imagen_Fondo from '../imagenes/foto-comidaadomicilio.jpg'


const platoCasero = menu.filter((element) => element.category === "Casero");
console.log (platoCasero)

const Menu = () => {
    return (
        <div className="fondo">
             <div className='container p-0'>
                               
                <div className='ContenidoPlatos'>
                    <h1 className='Titulo'>Platos</h1>
                    <hr></hr>
                        <Instrucciones/>
                    <hr></hr>
                    <h1 className='Titulo'>Platos Caseros</h1>
                    <img src={Imagen_Fondo} alt='imagen de fondo' className='ImagenFondo'></img>
                    
                        <div className='d-flex justify-content-center'>            
                            <Platos items={platoCasero}/>
                        </div> 
              </div>  
            </div>
        </div>
    )
}

export default Menu


