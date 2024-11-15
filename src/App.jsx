import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <div>
      <BrowserRouter>
      <CartProvider>
        <NavBar/>

        <Routes>
          <Route path='/' element = { <ItemListContainer bienvenida={"Bienvenido a la Franchesca Padel"} /> } />
          <Route path='/category/:idCategory' element = { <ItemListContainer bienvenida={"Bienvenido a la Franchesca Padel"} /> } />
          <Route path='/category/:idCategory' element = { <ItemListContainer bienvenida={"Bienvenido a la Franchesca Padel"} /> } />
          <Route path='/detail/:idProduct' element = { <ItemDetailContainer/> } />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </CartProvider>

      </BrowserRouter>
    </div>
  )
}

export default App
