import { useState } from "react"
import { ToDoItem } from "./ToDoItem"

export const ToDoList = () => {
    const [tareas, setTareas] = useState([])
    const [nuevaTarea, setNuevaTarea] = useState('')

    // tareas = ['Lavar platos', 'Sacar perro']
    // const copiaTareas = [...tareas, 'Leer libro']
    // ['Lavar platos', 'Sacar perro', 'Leer libro']

    const agregarTarea = () => {
        if(nuevaTarea.trim() !== ''){
            setTareas([...tareas, nuevaTarea])
            setNuevaTarea('')
        }
    }

    const eliminarTarea = (index) => {
        const nuevasTareas = tareas.filter((_,i) => i !== index )
        setTareas(nuevasTareas)
    }

    return(
        <>
            <h1>To Do List</h1>
            <input type="text" placeholder="Nueva tarea" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)}/>
            <button onClick={agregarTarea}>Agregar</button>
            <div>
                {tareas.map((tarea, index) => (
                    <ToDoItem tarea={tarea} key={`tarea-${index}`} eliminarTarea={() => eliminarTarea(index)}/>
                ))}
            </div>
        </>
    )
}