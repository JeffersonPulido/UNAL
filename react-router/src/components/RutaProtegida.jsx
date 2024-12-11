import { Navigate } from "react-router-dom"

export const RutaProtegida = ({ isAuthenticated, children }) => {
    if (!isAuthenticated) {
        return <Navigate to='/'/>
    }

    return children
}