import React from 'react'
import { useParams } from 'react-router-dom'

export const ServiciosDetalle = ({ servicios }) => {

    const { id } = useParams()

    const infoServicio = servicios.find(
        (servicio) => servicio.id.toString() === id
    )

  return (
    <section>
        <h1>Detalle del servicio:</h1>
        <h2>Servicio: {infoServicio.nombre ?? 'N/A'}</h2>
        <h2>Precio: {infoServicio.precio ?? 'N/A'}</h2>
    </section>
  )
}
