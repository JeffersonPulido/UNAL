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

    const handleBlur = (element) => {
        handleChanges(element)
        setErrores(validaciones(form))
    }

    const handleSubmit = (element) => {
        element.preventDefault();
        setErrores(validaciones(form))
        

        if (Object.keys(errores).length === 0) {
            setCargando(true)
            try {
                // const status = axios.post('/api/falso/usuario', {
                //     body: form
                // })

                // if (status.statusCode === 201) {
                //     console.log('Se ha guardado de manera correcta')
                //     setCargando(false)
                // }else{
                //     console.log(status.statusDescription)
                //     return;
                // }

                setBd(form)

                setTimeout(() => {
                    setCargando(false)
                    setRespuesta(true)
                }, 2500)

            } catch (error) {
                setRespuesta(false)
                console.error(error)
            }
        }else{
            setRespuesta(false)
            setCargando(false)
        }
    }

    return {
        form,
        errores,
        cargando,
        respuesta,
        bd,
        handleBlur,
        handleChanges,
        handleSubmit
    }
}