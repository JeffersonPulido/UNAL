import { NavLink } from "react-router-dom"

export const Menu = () => {
    return (
        <nav>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'active-link' : null)}>
                Home
            </NavLink>
            <NavLink to='/acerca' className={({ isActive }) => (isActive ? 'active-link' : null)}>
                Acerca
            </NavLink>
            <NavLink to='/productos' className={({ isActive }) => (isActive ? 'active-link' : null)}>
                Productos
            </NavLink>
            <NavLink to='/servicios' className={({ isActive }) => (isActive ? 'active-link' : null)}>
                Servicios
            </NavLink>
        </nav>
    )
}