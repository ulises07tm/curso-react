import React from 'react'
import "./itemlistcontainer.css"

const ItemListContainer = ( { bienvenida } ) => {

    return (
        <div className='bienvenida'>
            <h2 className='secondarybrand'>{bienvenida}</h2>
        </div>
    )
}

export default ItemListContainer