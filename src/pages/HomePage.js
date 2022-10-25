
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCard from '../components/ItemCard';

const HomePage = () => {
    const [items, setItems] = useState([])

    const getData = async () => {
        const data = await fetch("https://fakestoreapi.com/products")
        const res = await data.json()

        setItems(res)

    }

    useEffect(() => {
        getData()
    }, [])





    return (
        <div >
            <h1>Items for sale</h1>
            <div className="d-flex f-wrap">
                {items.map((x, i) => <ItemCard key={i} item={x} />)}

            </div>

        </div >

    );
};
export default HomePage