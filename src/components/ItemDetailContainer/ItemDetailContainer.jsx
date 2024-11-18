import "./itemdetail.css"
import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db.js"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState ({})
  const [loading, setLoading] = useState(true)
  const {idProduct} = useParams()



  const getProductById = () => {
    const docRef = doc( db, "products", idProduct )
    getDoc(docRef)
      .then((dataDb) => {
        const productDb = { id: dataDb.id, ...dataDb.data() }
        setProduct(productDb)
      })
      .catch((error) => {
        console.error("Error al obtener el producto: ", error)
      })
      .finally(() => {
        setLoading(false)
      });
  }
  
  useEffect( () => {
    setLoading(true)

    getProductById()

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
