import "./checkout.css"
import FormCheckout from "./FormCheckout"
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import db from "../../db/db.js"
import { Link } from "react-router-dom";
import validateForm from "../../utils/validateForm.js";
import { toast } from "react-toastify";


const Checkout = () => {

    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: "",
    })
    const [idOrder, setIdOrder] = useState(null)
    const { cart, totalPrice, deleteCart} = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDataForm({...dataForm, [event.target.name]: event.target.value})  
    }

    const handleSubmitForm = async(event) => {
        event.preventDefault()

        const order= {
            buyer: {...dataForm},
            products: [...cart],
            date: Timestamp.fromDate( new Date() ),
            total: totalPrice(), 
        }

        try {
            const response = await validateForm(dataForm)
            if(response.status === "error") throw new Error(response.message)

                toast.success("subiendo pedido")

                uploadOrder(order)

        } catch (error) {
            toast.error(error.message)
        }
    }

    const uploadOrder = (newOrder) => {
        const ordersRef = collection(db, "orders")
        addDoc(ordersRef, newOrder)
            .then( (response) => setIdOrder(response.id) )
            .catch ((error) => console.log(error))
            .finally(() => {
                deleteCart()
            })
    }



    return (
        <div className="container">
            {
                idOrder === null ? (
                    <FormCheckout 
                    dataForm={dataForm} 
                    handleChangeInput={handleChangeInput} 
                    handleSubmitForm={handleSubmitForm}/>
                ) : (
                    <div className="div-checkout">
                        <h2>¡Su compra esta hecha!👌</h2>
                        <p>Guarde su numero de seguimiento: {idOrder}</p>
                        <Link to="/">Volver al inicio</Link>
                    </div>
                )
            }
        </div>
    );
};

export default Checkout