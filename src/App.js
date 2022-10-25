import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Toolbar from './components/Toolbar';
import HomePage from './pages/HomePage';
import ItemPage from './pages/ItemPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div >



      <BrowserRouter>

        <Toolbar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/item/:id" element={<ItemPage cart={cart} setCart={setCart} />} />

          <Route path="/cart/" element={<CartPage cart={cart} setCart={setCart} />} />
          <Route path="/checkout/" element={<CheckoutPage />} />


        </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
