import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Frontend/components/Home/Home';
import Catalogo  from './Frontend/components/Catalogo/Catalogo';
import Iniciarsesion from './Frontend/components/Iniciarsesion/Iniciarsesion';
import Miperfil from './Frontend/components/Miperfil/Miperfil';
import Registro from './Frontend/components/Registro/Registro';
import NavBarComercio from './Frontend/layouts/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <NavBarComercio /> }>
          <Route index element= { <Home /> }/>
          <Route path='Catalogo' element= { <Catalogo /> }/>
          <Route path='Iniciarsesion' element= { <Iniciarsesion /> }/>
          <Route path='Registro' element= { <Registro /> }/>
          <Route path='Miperfil' element= { <Miperfil /> }/>

          <Route path='*' element= { <Navigate replace to="/" /> }/>

        </Route>
      </Routes>
      
      </BrowserRouter>




    </div>
  );
}

export default App;
