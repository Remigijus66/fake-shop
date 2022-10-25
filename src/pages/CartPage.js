import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CartCard from '../components/CartCard';
import { useNavigate } from "react-router-dom";
import { valid } from 'semver';

const CartPage = ({ cart, setCart }) => {

  const nav = useNavigate()

  const navigate = () => {
    nav("/checkout/")
  }


  const [cartValue, setCartValue] = useState(0)
  // const nav = useNavigate()



  const calcCartValue = () => {
    const val = cart.reduce((sum, { price }) => sum + price, 0);
    setCartValue(Number(val.toFixed(2)))
  }

  useEffect(() => {
    calcCartValue()
  }, [])

  return (
    <div >
      <h2 style={{ color: '#2196f3' }}>Cart. Value {cartValue} €</h2>

      <button className='btn checkout' onClick={() => navigate()} > Checkout</button>

      <div className="d-flex f-wrap">
        {cart.map((x, i) => <CartCard key={i} item={x} cart={cart} setCart={setCart} cartValue={cartValue} setCartValue={setCartValue} />)}

      </div>

    </div>

  );
};
export default CartPage