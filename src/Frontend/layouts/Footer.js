import logo from "../components/imagenes/logo.jpg"
import  "./footer.css"


const Footer = () => {
    return (
      <div>
            <footer className="footer py-4">
                <nav className="row  contenedorFooter"> 
                    <div className="col-xs-12 col-lg-3">
                    <img className="imagenLogo"alt="logo"src={logo} />
                    </div>
                    <div className='col-xs-12 col-lg-3'>
                        <h3 className="mb-4">Siguenos:</h3>
                        <i className="fa-brands fa-square-instagram me-3"></i>
                        <i className="fa-brands fa-facebook me-3"></i>
                        <i class="fa-brands fa-twitter"></i>
             
                    </div>
                    <div className='col-xs-12 col-lg-3'>
                        <h3>Contacto</h3>
                        <i class="fa-brands fa-whatsapp"></i><p className="fw-bolder">+569-82386395</p>
                        <i class="fa-solid fa-envelope"></i><p className="fw-bolder">menu_kceros@gmail.com</p>
                    </div>
                  
                  <div className='col-12 col-md-12 d-flex justify-content-center text-center'> 
                        <p className="text-center text-light mt-4">© 2023 by Bárbara y Camila</p>
                  </div>
                </nav>

            </footer>
        </div>
    );
  }
  
  export default Footer;
