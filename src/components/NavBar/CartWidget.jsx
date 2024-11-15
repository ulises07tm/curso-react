import "./cartwidget.css"
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    const quantity = totalQuantity()

    return (
        <Link to="/cart" className="iconcart">
            <FaShoppingCart className={ quantity === 0 ? "empty-cart" : "icon-cart" } />
            <p className="count-cart">{ quantity >= 1 && quantity }</p>
        </Link>
    )
}

export default CartWidget