import "./cart.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)

    if(cart.length === 0){
        return (
            <div className="div-cart">
                <h2  className="h2-cart">No hay productos en el carrito 😤</h2>
                <Link to="/"  className="link-cart">Volver al inicio</Link>
            </div>
        )
    }

    return (
        <div>
            <h2>Productos en el carrito</h2>
            {
                cart.map( (productCart) => (
                    <div key={productCart.id}>
                        <img src={productCart.image} width={100} alt="" />
                        <p>{productCart.name}</p>
                        <p>Cantidad: {productCart.quantity}</p>
                        <p>precio c/u: {productCart.price}</p>
                        <p>precio parcial: {productCart.quantity * productCart.price}</p>
                    
                    <button onClick={ () => deleteProductById(productCart.id)}>borrar producto</button>
                    </div>
                ) )
            }

            <p>Precio total: {totalPrice()}</p>
            <button onClick={deleteCart}>borrar carrito</button>
        </div>
    )
}

export default Cart