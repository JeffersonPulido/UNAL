import { useForm } from "../hooks/useForms"

const valoresDefecto = {
    nombre: "",
    email: "",
    asunto: "",
    observaciones:""
}

const validaciones = (form) => {
    let erroresFormulario = {};

    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,6}$/;
    let regexComments = /^.{1,255}$/;

    if (!form.nombre.trim()) {
        erroresFormulario.nombre = "El nombre es obligatorio"        
    }
    if (!form.email.trim()) {
        erroresFormulario.email = "El email es obligatorio"
    } else if(!regexEmail.test(form.email.trim())){
        erroresFormulario.email = "El campo no tiene el formato de un correo"
    }
    if (!form.asunto.trim()) {
        erroresFormulario.asunto = "El asunto es obligatorio"        
    }
    if (!form.observaciones.trim()) {
        erroresFormulario.asunto = "El campo es obligatorio"
    } else if (!regexComments.test(form.observaciones.trim())){
        erroresFormulario.asunto = "El campo debe tener minimo 1 y maximo 255 caracteres"
    }

    return erroresFormulario
}

const ContactForm = () => {
    const {form, handleChanges, handleSubmit} = useForm(valoresDefecto, validaciones)
    return (
        <>
            <h1>Formulario de contacto</h1>
            <form onSubmit={handleSubmit}>
                <p>Nombre</p>
                <input type="text" name="nombre" placeholder="Escribe tu nombre..." value={form.nombre} onChange={handleChanges}/>
                <p>Email</p>
                <input type="email" name="email" placeholder="Escribe tu email..." value={form.email} onChange={handleChanges}/>
                <p>Asunto</p>
                <input type="text" name="asunto" placeholder="Escribe tu asunto..." value={form.asunto} onChange={handleChanges}/>
                <p>Observaciones</p>
                <textarea name="observaciones" placeholder="Escribe tus obseraciones..." cols={50} rows={5} value={form.observaciones} onChange={handleChanges}/>
                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}

export default ContactForm