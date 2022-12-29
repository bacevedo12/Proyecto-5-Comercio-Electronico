
import './Menu.css';
import menu from './Data.js'
import Platos from "./Platos.js";


const platoCasero = menu.filter((element) => element.category === "Casero");
console.log (platoCasero)
const Menu = () => {
    return (
        

        <div className="fondo">
            <h1 className='Titulo'>Menu</h1>
            <hr></hr>
            <h1 className='Titulo'>Platos Caseros</h1>
                <div className='d-flex justify-content-center'>            
                    <Platos items={platoCasero}/>
                </div> 

        </div>
    )
}

export default Menu


