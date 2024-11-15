import "./itemdetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ( {product} ) => {

    const [showItemCount, setShowItemCount] = useState(true)

    const {addProductInCart } = useContext(CartContext)

    const addProduct = (count) => {
        const productCart = {...product, quantity: count  }

        addProductInCart(productCart)
        setShowItemCount(false)
    }

    return (

        <div className="card-detail">

                <img src= {product.image} className="image-detail" alt="" />

            <div className="card-descript">
                <h2 className="name-detail" >{product.name}</h2>
                <p className="descript-detail" >{product.description}</p>
                <p className="price-detail" >Precio: ${product.price} </p>
                {
                    showItemCount === true ? (
                        <ItemCount stock={product.stock} addProduct={addProduct} />
                    ) : (
                        <Link to= "/cart" className="buys-detail">Finalizar tu compra</Link>
                    )
                }
            </div>

        </div>
    )
}

export default ItemDetail