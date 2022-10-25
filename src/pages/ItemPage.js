import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleItem from '../components/SingleItem';

const ItemPage = ({ cart, setCart }) => {
  const { id } = useParams()
  const [item, setItem] = useState([])

  const getSingleItem = async () => {
    const data = await fetch("https://fakestoreapi.com/products/" + id)

    const res = await data.json()

    // console.log("res", res)
    setItem(res)

  }

  useEffect(() => {
    getSingleItem()
  }, [])


  return (
    <div >


      <SingleItem item={item} cart={cart} setCart={setCart} />


    </div>

  );
};
export default ItemPage