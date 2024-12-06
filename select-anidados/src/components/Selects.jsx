import { useState } from "react";
import { SelectList } from "./SelectList";
import { Info } from "./Info";

export const Selects = () => {
  const [departamentos, setDepartamentos] = useState("");
  const [municipios, setMunicipios] = useState("");

  console.log(departamentos);
  console.log(municipios);

  return (
    <>
      <SelectList
        title="Departamentos"
        url="https://api-colombia.com/api/v1/Department"
        handleChange={(e) => setDepartamentos(e.target.value)}
      />

      {departamentos && (
        <SelectList
          title="Municipios"
          url={`https://api-colombia.com/api/v1/Department/${departamentos}/cities`}
          handleChange={(e) => setMunicipios(e.target.value)}
        />
      )}

      {municipios && (
        <Info url={`https://api-colombia.com/api/v1/City/${municipios}`}/>
      )}
    </>
  );
};
