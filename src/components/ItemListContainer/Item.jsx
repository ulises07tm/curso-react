import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( {product} ) => {

    return (
        <Link to = {"/detail/" + product.id} className="product-card">
            <img src={product.image} width={300} alt="" />
            <h2 className="name-item" >{product.name}</h2>
            <p className="price-item" >precio: ${product.price}</p>
        </Link>
    )

}

export default Item