import { useState } from "react"

export const useForm = (valoresDefecto, validaciones) => {
    const [form, setForm] = useState(valoresDefecto)
    const [errores, setErrores] = useState({})
    const [cargando, setCargando] = useState(false)
    const [bd, setBd] = useState()
    const [respuesta, setRespuesta] = useState(false)

    const handleChanges = (element) => {
        const {name, value} = element.target

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (element) => {
        element.preventDefault();
        console.log(form)
        //TODO: Validar errores vacios, realizar validaciones con onBlur y con onSubmit, crear funcion handleOnBlur
    }

    return {
        form,
        handleChanges,
        handleSubmit
    }
}