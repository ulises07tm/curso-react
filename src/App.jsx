import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from "./components/Checkout/Checkout";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';




function App() {

  return (
    <div>
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <ToastContainer
        autoClose={2000}
        hideProgressBar={true}
        closeButton={false}
        pauseOnHover  
        />

        <Routes>
          <Route path='/' element = { <ItemListContainer bienvenida={"Bienvenido a la Franchesca Padel"} /> } />
          <Route path='/category/:idCategory' element = { <ItemListContainer bienvenida={"Bienvenido a la Franchesca Padel"} /> } />
          <Route path='/detail/:idProduct' element = { <ItemDetailContainer/> } />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
      </CartProvider>

      </BrowserRouter>
    </div>
  )
}

export default App
