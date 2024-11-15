import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import "./navbar.css"

const NavBar = () => {

    return (
        <nav className="navbar">
            <Link to="/">
                <h1 className="brand">La Franchesca Padel</h1>
            </Link>

            <ul className="list">
                <li> <Link to="/category/paletas">Paletas</Link></li>
                <li> <Link to="/category/indumentaria">Indumentaria</Link></li>
                <li> <Link to="/category/bolsos">Bolsos</Link></li>
            </ul>
            
            <CartWidget/>
        </nav>
    )
}

export default NavBar  