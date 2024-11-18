import "./itemlistcontainer.css"
import ItemList from './ItemList.jsx'
import React, { useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"

const ItemListContainer = ( { bienvenida } ) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()



const getProducts = () => {
    const productsRef= collection( db, "products" )
    setLoading(true) 


    getDocs(productsRef)
        .then((dataDb) => {
            const productsDb = dataDb.docs.map((productDb) => {
                return { id: productDb.id, ...productDb.data() }              
            })
            setProducts(productsDb)
        })
        .finally(() => setLoading(false))
    }


    const getProductsByCategory = () => {
        const productsRef = collection(db, "products")
        const queryCategories = query(  productsRef, where("category", "==", idCategory) )
        
        setLoading(true);
        
        getDocs(queryCategories)
            .then((dataDb) => {
                const productsDb = dataDb.docs.map((productDb) => {
                    return { id: productDb.id, ...productDb.data() }              
                })
                setProducts(productsDb)
            })
            .finally(() => setLoading(false));
    }



    useEffect(()=> {

        if(idCategory){
            getProductsByCategory()
        }else{
            getProducts()
        }

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