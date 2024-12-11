import { Link } from "react-router-dom"

export const ServiciosLista = ({ servicios }) => {
    return (
        <div>
            <h1>Listado de servicios</h1>
            <ul>
            {servicios.map((servicio) => (
                <li key={servicio.id}>
                  <Link to={`/servicios/${servicio.id}`}>{`${servicio.nombre} - $ ${servicio.precio}`}</Link>
                </li>
            ))}
        </ul>
        </div>
    )
}