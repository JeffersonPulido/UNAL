import { Button, ButtonXS, Footer, Texto } from "./components"

function App() {

  // AQUI VA LA LOGICA
  
  return (
    <>
      {/* HEADER */}
      
      {/* HOME */}
      <Button>
        iniciar Sesion
        icono
      </Button>
      <hr />
      <Button>Pagar</Button>
      <hr />
      <ButtonXS title='Titulo'/>
      <ButtonXS title={2} />
      <Texto text="Este es un texto"/>
      {/* FOOTER */}
      <Footer/>
    </>
  )
}

export default App