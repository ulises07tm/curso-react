import "./itemdetail.css"

const ItemDetail = ( {product} ) => {
    return (

        <div className="card-detail">

                <img src= {product.image} className="image-detail" alt="" />

            <div className="card-descript">
                <h2 className="name-detail" >{product.name}</h2>
                <p className="descript-detail" >{product.description}</p>
                <p className="price-detail" >Precio: ${product.price} </p>
            </div>

        </div>
    )
}

export default ItemDetail