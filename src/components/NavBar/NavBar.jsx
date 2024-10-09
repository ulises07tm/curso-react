import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {

    return (
        <nav className="navbar">
            <div>
                <h1 className="brand">La Franchesca</h1>
            </div>

                <ul className="list">
                    <li>buzos</li>
                    <li>remeras</li>
                    <li>pantalones</li>
                    <li>zapatillas</li>
                </ul>
            
            <CartWidget/>
        </nav>
    )
}

export default NavBar