import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio/Inicio';
import Menu from './components/Menu/Menu';
import Iniciarsesion from './components/Iniciarsesion/Iniciarsesion';
import Miperfil from './components/Miperfil/Miperfil';
import Registro from './components/Registro/Registro';
import NavBarComercio from './layouts/Navbar';
import ProductDetails from './components/Menu/ProductDetails';
import Shoppingcart from './components/Menu/ShoppingCart';
//import { cartprovider } from './components/Menu/Context/CartContext';

function App() {
  return (

    <div className="App">
      {/* <cartprovider> */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<NavBarComercio />}>
              <Route index element={<Inicio />} />
              <Route path='/Iniciarsesion' element={<Iniciarsesion />} />
              <Route path='/Registro' element={<Registro />} />
              <Route path='/Miperfil' element={<Miperfil />} />
              <Route path='/Menu' element={<Menu />} />
              <Route path='/Menu/:platoid' element={<ProductDetails />} />
              <Route path='/Cart' element={<Shoppingcart />} />
              <Route path='*' element={<Navigate replace to="/" />} />
            </Route>
          </Routes>

        </BrowserRouter>
      {/* </cartprovider> */}
      
    </div>

  );;
}

export default App;
