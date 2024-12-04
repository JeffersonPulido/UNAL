export const ToDoItem = ({ tarea, eliminarTarea }) => {
    
    return (
        <div>
            <p>{tarea}</p>
            <button onClick={eliminarTarea}>Eliminar</button>
        </div>
    )
}