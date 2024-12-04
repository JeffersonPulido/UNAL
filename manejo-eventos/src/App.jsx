import { useState } from "react";
import "./App.css";
import { ToDoList } from "./components/ToDoList";

function App() {
  // const [contador, setContador] = useState(0);
  // const [nombre, setNombre] = useState('');

  // const handleInput = (e) => {
  //   const valor = e.target.value

  //   if (nombre.length > 5) {
  //     console.log('EL input no debe ser mayor a 5 caracteres')
  //   } else {
  //     setNombre(valor)
  //     {console.log(nombre)}
  //   }

  // }

  return (
    <>
      <h1>Manejo de eventos</h1>
      {/* <div className="card">
        <p>Contador: <span>{contador}</span></p>
        <button onClick={() => setContador(contador + 1)}>+</button>
        <button onClick={() => setContador(contador - 1)}>-</button>
      </div>

      <p>Mi nombre es: {nombre}</p>
      <input type="text" value={nombre} onChange={e => handleInput(e)}/> */}
      


      <ToDoList/>
    </>
  );
}

export default App;
