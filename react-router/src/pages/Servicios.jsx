import { Link, Outlet } from "react-router-dom"

export const Servicios = () => {
    return (

        <div>
            <h1>Servicios</h1>
            <nav>
                <Link to="/servicios">Inicio servicios</Link>
                <Link to="/servicios/garantia">Servicio Garantias</Link>
                <Link to="/servicios/lista">Lista de servicios</Link>
            </nav>
            <Outlet/>
        </div>
    )
}