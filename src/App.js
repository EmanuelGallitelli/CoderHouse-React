import { Fragment } from 'react';
import '../src/Assets/App.css';
import NavBar from './Layout/NavBar';
import ItemlistContainer from './Components/ItemlistContainer';
import Footer from './Layout/Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './Components/ItemDetailContainer';
import  { CartProvider } from './Context/CartContext';
import Cart from "../src/Layout/Cart"

function App() {
  return (
    <>
  
      <CartProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<ItemlistContainer/>} />
      <Route path="/categoria/:categoria" element={<ItemlistContainer/>} />
      <Route path="/:categoria/:libroID" element={<ItemDetailContainer/>} />
      <Route path="/cart" element={<Cart/>} />

      
      </Routes>


    </BrowserRouter>
      <Footer />
      </CartProvider>

    </>
  );
}

export default App;
