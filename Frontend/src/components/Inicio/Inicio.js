import "./Inicio.css"
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import menusemanal from "../imagenes/foto-menusemanal.jpg";
import ControlledCarousel from './Carrusel'

const Home = () => {
    return (
        <div className="Contenedor">
         <main className="row">
            <div className="imagenInicio">
                <h1 className="parrafoInicio mt-4 fw-bolder fs-1 text-light">Comida casera a la puerta de tu casa</h1><br></br>
                <h2 className="parrafoInicio mt-5 fw-bolder text-light">Escoge los platos que más te gusten </h2>
                <h3 className="parrafoInicio mt-3 fw-bolder text-light"> ¡Y crea tu menú personalizado!</h3>
                <Button as={Link} to="/Menu" className="text-light mt-5" variant="info">Ver menú</Button>
    
            </div>   
            <div className="col-6">
                <img alt="logo"src={ menusemanal } className="imagenMenuSemanal"/>
            </div>
            <div className="reservaInicio col-6 align-items-center">
         <h1 className="parrafoReserva mt-5">Registrate gratis</h1>
         <h3 className="parrafoReserva mt-3">Y recibe todas nuestras <br></br>promociones de menus!!!!</h3>
         <Button as={Link} to="/Registro"className="botonRegistrate text-light mt-5" variant="info">Registrate Aquí</Button> 
      </div>
      
            </main>
            <div className="carousel">
            <ControlledCarousel/>
        </div>   
        </div>
         
    )
}

export default Home