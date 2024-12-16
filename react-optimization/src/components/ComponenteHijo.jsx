import React from "react";

const ComponenteHijo = React.memo(({ nombre }) => {
  console.log("Renderizado del componente hijo...");

  return (
    <div>
      <p>Hola {nombre}</p>
    </div>
  );
});

export default ComponenteHijo;
