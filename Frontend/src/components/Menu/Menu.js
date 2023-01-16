
import './Menu.css';
import menu from './Data.js'
import Platos from "./Platos.js";
import Instrucciones from './Instrucciones.js';
import { useState, useEffect } from 'react';
import axios from 'axios'; 
import { url_api } from '../api/Api';


// import Imagen_Fondo from '../imagenes/foto-comidaadomicilio.jpg'





const platoCasero = menu.filter((element) => element.category === "Casero");
console.log (platoCasero)

const Menu = () => {
 
const [menu, setMenu]= useState({})
    
    useEffect(()=> {
        
        const getMenu = async() => {
            const result = await axios.get(`${url_api}/platos`);
            console.log(result);
            setMenu(result.data.platos)
          }
          getMenu();
    }, [])

console.log (menu)


    return (
        <div className="fondo">
             <div className='container p-0'>
                               
                <div className='ContenidoPlatos'>
                    <h1 className='Titulo'>Instrucciones</h1>
                    <hr></hr>
                        <Instrucciones/>
                    <hr></hr>
                    <h1 className='Titulo'>Platos Caseros</h1>
                    <div className='ImagenFondo'>
                    {/* <img src={Imagen_Fondo} alt='imagen de fondo' className='ImagenFondo'></img> */}
                    
                        <div className='d-flex justify-content-center'>            
                            <Platos items={menu}/>
                        </div> 
                    </div>      
              </div>  
            </div>
        </div>
    )
}

export default Menu


