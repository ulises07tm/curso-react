import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path='/' element = { <ItemListContainer bienvenida={"Bienvenido a la Franchesca Padel"} /> } />
          <Route path='/category/:idCategory' element = { <ItemListContainer bienvenida={"Bienvenido a la Franchesca Padel"} /> } />
          <Route path='/category/:idCategory' element = { <ItemListContainer bienvenida={"Bienvenido a la Franchesca Padel"} /> } />
          <Route path='/detail/:idProduct' element = { <ItemDetailContainer/> } />
          
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
