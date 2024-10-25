const products = [
    {
        id: "df2121",
        name: "Drop Shot Sakura",
        description: " Descripcion: PALETA DE PADEL DROP SHOT SAKURA 3.0. Dentro de la coleccion de palas de pádel Drop Shot conoce la nueva Drop Shot Sakura 3.0, una pala destinada a todo jugador que se inicia en el pádel, sin importar edad o género.La pala Drop Shot Sakura 3.0 es una pala que combina materiales flexibles con la goma Eva Soft, asi consigue una gran pegada y un amplio punto dulce en el golpeo.Gracias a la tecnología Cork Grip, las vibraciones en el golpeo son reducidas combinado con un marco de doble tubular de carbono.Una pala diseñada para jugadores de nivel iniciación avanzado que buscan un producto que aporte potencia y confort a su juego.",
        stock: 5,
        price: 180000,
        image: "/img/paleta-dropshot-sakura.jpg",
        category: "paletas"
    },
    {
        id: "Gt2233",
        name: "Royale Cross",
        description: "La nueva Cross Pro cuenta con un punto de impacto alto. Se destaca su potencia y control. Esta paleta esta pensada para despedir mucho pero permite sentir y controlar el golpe.",
        stock: 8,
        price: 160000,
        image: "/img/paleta-royal-cross.webp",
        category: "paletas"
    },

    {
        id: "Hh2444",
        name: "Remera Nox",
        description: "La camiseta Nox Team Regular 2024 incorpora un tejido ligero con tecnología Balance Fresh para mantener la transpirabilidad y confort durante el juego en color rojo. Composición: 90% Poliéster - 10% Elastano",
        stock: 10,
        price: 15000,
        image: "/img/remera-nox.webp",
        category: "indumentaria"
    },
    {
        id: "Kj8675",
        name: "Short Nox",
        description: "Pantalón Nox Team disponible en varios colores. Una prenda cómoda y perfecta para jugar a pádel. El tejido ligero con tecnología Balce Fresh de Nox garantiza la transpirabilidad durante el juego. Composición: 90% Poliéster - 10% Elastano",
        stock: 15,
        price: 12000,
        image: "/img/short-nox.png",
        category: "indumentaria"
    },

    {
        id: "Hb7555",
        name: "bolso OdPro",
        description: "Bolso de padel OdPro 2024 con compartimento principal con capacidad para 3 palas de pádel así como otro compartimento térmico con capacidad para otras dos 2 palas más. ",
        stock: 5,
        price: 80000,
        image: "/img/bolso-odpro.png",
        category: "bolsos"
    },
    {
        id: "Mk3434",
        name: "Bolso Adidas",
        description: "El nuevo paletero de Ale Galán está fabricado para cargar con todo lo que necesita un jugador de pádel. Su bolsillo central es de gran tamaño para poder guardar en él todo tu equipamiento. Los dos compartimentos laterales son para las palas. Están recubiertos de un aislamiento térmico para llevarlas a buen recaudo. Debajo del compartimento central hay un espacio con rejilla pensado para las zapatillas. Para los objetos pequeños, el paletero cuenta con tres bolsillos, uno a cada lado, y un tercero en la parte superior.",
        stock: 5,
        price: 90000,
        image: "/img/bolso-adidas.webp",
        category: "bolsos"
    }

]

const getProducts = ( ) => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve (products)
        }, 2000)
    })
}

export { getProducts }