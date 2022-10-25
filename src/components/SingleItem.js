import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'




const SingleItem = ({ item, cart, setCart }) => {


  const cartIcon = <FontAwesomeIcon icon={faCartShopping} />
  const [onCart, setOnCart] = useState(false)
  const nav = useNavigate()
  const goToCart = () => {
    nav("/cart")
  }
  const goToShop = () => {
    nav("/")
  }

  const handleCart = () => {

    console.log('cart before add/delete', cart)

    if (cart.some(e => e.id === item.id)) {
      console.log(' item found');
      let cartCopy = [...cart]
      cartCopy.splice(cartCopy.findIndex(e => e.id === item.id), 1);
      setCart(cartCopy)
      setOnCart(false)
      console.log("deleted from cart")

    } else {
      console.log('item not found');
      setCart([...cart, item])
      setOnCart(true)
      console.log('added to cart')
    }

    console.log('cart after add/delete', cart)
    // goToCart()
    // goToShop()
  }

  const checkCart = () => {
    console.log('checkCart', cart)
    console.log('checkCart item.id', item.id)
    console.log("item=", item)

    if (cart.some(e => e.id === item.id)) {
      console.log('item found');
      setOnCart(true)
    } else {
      console.log('item not found');
      setOnCart(false)
    }
  }
  // kodel useEffect pradiniame etape neturi gauto "item state... dabar jau rodo, nes laukia kol parfechins "
  useEffect(() => {
    checkCart()
  }, [cart, item])


  return (

    <div>

      <div className='btn d-flex f-wrap' onClick={() => handleCart()}> {onCart === false && 'Add to Cart'}
        {onCart === true && 'Delete form Cart'} <div> {cartIcon}</div> </div>

      <div className="card-large" >  <img className='input-image' src={item.image} alt="" /> <p style={{ fontSize: '18px' }}> {item.title}</p>
        <p style={{ fontSize: '10px' }}> {item.description}</p>
        <h4>Price {item.price}</h4>
        {/* <h5>Rating {item.rating.rate}</h5>  */}
      </div>




    </div>
  );
};

export default SingleItem;