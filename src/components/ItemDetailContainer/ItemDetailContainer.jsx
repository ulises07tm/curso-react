import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import { getProducts } from "../../data/data"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState ({})

  const {idProduct} = useParams()
  
  useEffect( () => {

    getProducts()
      .then((data) => {
        const findProduct= data.find ( (product) => product.id === idProduct )
        setProduct(findProduct)
      })

  }, [idProduct] )

  return (
    <ItemDetail product = {product}/>
  )
}

export default ItemDetailContainer
