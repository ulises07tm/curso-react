import "./itemlistcontainer.css"
import React, { useEffect, useState} from 'react'
import { getProducts } from '../../data/data'
import { useParams } from "react-router-dom"
import ItemList from './ItemList.jsx'

const ItemListContainer = ( { bienvenida } ) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()

    useEffect(()=> {
        setLoading(true)

        getProducts()
        .then ((data) =>{
            if (idCategory) {
                const filterProducts = data.filter ( (product) => product.category === idCategory )
                setProducts(filterProducts)
            } else {
                setProducts(data)
            }

        })
        .catch ((error) => {
            console.error (error)
        })
        .finally (() => {
            setLoading(false)
        })

    }, [idCategory])

    return (
        <div className='div-main'>
            <h2 className='secondarybrand'>{bienvenida}</h2>
            {
                loading === true ? (
                    <div className="loading-item">Cargando...</div>
                ) : (
                    <ItemList products= {products}/>
                )
            }
        </div>
    )
}

export default ItemListContainer 