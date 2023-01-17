import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio/Inicio';
import Menu  from './components/Menu/Menu';
import Iniciarsesion from './components/Iniciarsesion/Iniciarsesion';
import Miperfil from './components/Miperfil/Miperfil';
import Registro from './components/Registro/Registro';
import NavBarComercio from './layouts/Navbar';
import  CarritoCompra  from './components/CarritoCompra/CarritoCompra';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <NavBarComercio /> }>
          <Route index element= { <Inicio /> }/>
          <Route path='Menu' element= { <Menu /> }/>
          <Route path='Iniciarsesion' element= { <Iniciarsesion /> }/>
          <Route path='Registro' element= { <Registro /> }/>
          <Route path='Miperfil' element= { <Miperfil /> }/>
          <Route path='CarritoCompra' element= { <CarritoCompra /> }/>
          <Route path='*' element= { <Navigate replace to="/" /> }/>

        </Route>
      </Routes>
      
      </BrowserRouter>




    </div>
  );
}

export default App;
