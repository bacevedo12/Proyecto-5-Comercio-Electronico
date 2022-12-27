import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from 'react-router-dom';
import './navbar.css'
import logo from "../components/imagenes/logo.jpg"
import Footer from "./Footer";


const NavBarComercio= () => {
  return (
    <>
    <div className="contenedor text-dark justify-content-start">
    
      <Navbar className="navBar text aling-between" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" >
          <img alt="logo"src={logo} className="imagenLogo imag-fluid"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fw-bold fs-5">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/Menu">Menú</Nav.Link>
            <Nav.Link as={Link} to="/Iniciarsesion">Iniciar sesion</Nav.Link>
            <Nav.Link as={Link} to="/Registro">Registro</Nav.Link>
            <Nav.Link as={Link} to="/Miperfil">Mi perfil</Nav.Link>
           
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>  

      <section>
        <Outlet></Outlet>
      </section>

      <Footer/>
      
    </div>
    </>
  );
}

export default NavBarComercio;