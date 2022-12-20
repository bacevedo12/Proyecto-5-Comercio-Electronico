import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from 'react-router-dom';
import './navbar.css'




const NavBarComercio= () => {
  return (
    <>
    <div className="contenedor text-dark  justify-content-between">
    
      <Navbar className="navBar" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" >
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fw-bold fs-5">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Catalogo">Catalogo</Nav.Link>
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

    
      
    </div>
    </>
  );
}

export default NavBarComercio;