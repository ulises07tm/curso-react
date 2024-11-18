import "./cart.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { FaTrash } from "react-icons/fa";

const Cart = () => {
    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)

    if(cart.length === 0){
        return (
            <div className="div-empty-cart">
                <h2  className="h2-empty-cart">No hay productos en el carrito 😤</h2>
                <Link to="/" className="link-empty-cart">Volver al inicio</Link>
            </div>
        )
    }

    return (
        <div>
            <div className="div-brand">
                <h2 className="brand-cart">Productos en el carrito</h2>
            </div>
            {
                cart.map( (productCart) => (
                    <div key={productCart.id} className="div-cart">
                        <img src={productCart.image} width={100} alt="" className="div-cart"/>
                        <p className="name-cart">{productCart.name}</p>
                        <p className="quantity-cart">Cantidad: {productCart.quantity}</p>
                        <p className="price-cart">precio c/u: {productCart.price}</p>
                        <p className="partial-cart">precio parcial: {productCart.quantity * productCart.price}</p>
                    
                    <button onClick={ () => deleteProductById(productCart.id)}><FaTrash /></button>
                    </div>
                ) )
            }
            <div className="div-secondary">
                <p className="total-cart">Precio total: {totalPrice()}</p>
                <Link to="/checkout">terminar mi compra</Link>
                <button onClick={deleteCart} className="delete-cart">Vaciar carrito</button>
            </div>
        </div>
    )
}

export default Cart