import { lazy, useMemo, useState, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ComponenteHijo from "./components/ComponenteHijo";

//Ejemplo de useMemo
function ExpensiveCalculation({ number }) {
  const calculate = (num) => {
    console.log("Calculo complejo ejecuntando...");
    return num * 2;
  };

  const result = useMemo(() => calculate(number), [number]);
  return <p>Resultado: {result}</p>;
}

const SkeletonComponent = lazy(() => import("./components/Skeleton"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Suspense fallback={<p>Cargando componente</p>}>
        <div>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
        {/* Ejemplo de useMemo */}
        <ExpensiveCalculation number={count} />
        {/* Ejemplo de memo */}
        <ComponenteHijo nombre="Juan" />
        <SkeletonComponent />
      </Suspense>
    </>
  );
}

export default App;
