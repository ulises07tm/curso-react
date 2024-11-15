import "./itemcount.css"
import React from 'react'
import { useState } from 'react';

const ItemCount = ( {stock, addProduct} ) => {
    const [count, setCount] = useState(1)

    const handleClickRest = () => {
        if(count > 1){
            setCount (count - 1)
        }
    }

    const handleClickAdd = () => {
        if(count < stock)
        setCount (count + 1)
    }

    return (
    <div className="item-div">

        <div className="div-button">
            <button onClick={handleClickRest} className="item-rest">-</button>
            <p className="item-count">{count}</p>
            <button onClick={handleClickAdd} className="item-add">+</button>
        </div>

        <button onClick={ () => addProduct(count) } className="item-add-cart">Agregar al carrito</button>

    </div>
    )
}

export default ItemCount