import iconCart from "../../assets/cart.jpg"
import "./cartwidget.css"

const CartWidget = () => {

    return (
        <div className="iconcart">
            <img src={iconCart} width={100} alt="" />
            <p>2</p>
        </div>
    )
}

export default CartWidget