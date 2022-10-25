import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const ItemCard = ({ item }) => {

  const nav = useNavigate()

  const navigate = () => {
    nav("/item/" + item.id)
  }

  return (

    <div className="card with-link" onClick={navigate}> <div className='input-container'> <img className='input-image' src={item.image} alt="" /></div> <div div className='input-container'> <p style={{ fontSize: '10px' }}> {item.title}</p></div> <h5>Price {item.price} €</h5> </div>


  );
};

export default ItemCard;