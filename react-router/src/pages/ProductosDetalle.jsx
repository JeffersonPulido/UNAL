import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const ProductosDetalle = ({ productos }) => {

    const { id } = useParams()
    const navegador = useNavigate()

    const infoProducto = productos.find(
        (producto) => producto.id.toString() === id
    )

    const funcionNavegar = () => {
      navegador(-1)
    }

  return (
    <section>
        <h1>Detalle del producto:</h1>
        <h2>Producto: {infoProducto.nombre ?? 'N/A'}</h2>
        <h2>Precio: {infoProducto.precio ?? 'N/A'}</h2>
        <button onClick={funcionNavegar}>Regresar</button>
    </section>
  )
}

// export default ProductosDetalle
