import "./itemdetail.css"
import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import { getProducts } from "../../data/data"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState ({})
  const [loading, setLoading] = useState(true)
  const {idProduct} = useParams()
  
  useEffect( () => {
    setLoading(true)

    getProducts()
      .then((data) => {
        const findProduct= data.find ( (product) => product.id === idProduct )
        setProduct(findProduct)
        setLoading(false);
      })
      .catch(() => {
        setLoading(false); // Cambia loading a false en caso de error también
      });

  }, [idProduct] )

  return (
    <div>
      {
        loading === true ? (
          <div className="loading-detail">Cargando...</div>
          ) : (
              < ItemDetail product = {product}/>
          )
      }  
    </div>
  )
}

export default ItemDetailContainer
