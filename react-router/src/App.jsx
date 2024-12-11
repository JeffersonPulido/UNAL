
import { Route, Routes } from 'react-router-dom'
import './App.css'

import { Menu } from './components/Menu';
import { About, Error404, Home, Productos, ProductosDetalle, Servicios, ServiciosDetalle, ServiciosGarantia, ServiciosHome, ServiciosLista } from './pages';
import { useState } from 'react';
import { RutaProtegida } from './components/RutaProtegida';

function App() {
  // const ABOUT = '/acerca'
  const [productos, setProductos] = useState([
    {
      id:1,
      nombre: 'Carne',
      precio: 100
    }, 
    {
      id:2,
      nombre: 'Pollo',
      precio: 200
    }, 
    {
      id:3,
      nombre: 'Cerdo',
      precio: 300
    }, 
    {
      id:4,
      nombre: 'Pez',
      precio: 400
    }, 
    {
      id:5,
      nombre: 'Vegetales',
      precio: 500
    }
  ])

  const [servicios, setServicios] = useState([
    {
      id:1,
      nombre: 'Luz',
      precio: 100
    }, 
    {
      id:2,
      nombre: 'Agua',
      precio: 200
    }, 
    {
      id:3,
      nombre: 'Gas',
      precio: 300
    }, 
    {
      id:4,
      nombre: 'Internet',
      precio: 400
    }
  ])
  return (
    <>
      <h1>React Router</h1>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/acerca' element={<About/>}/>

        {/* Ruta de productos generales */}
        <Route path='/productos' element={
          <RutaProtegida isAuthenticated={true}>
              <Productos productos={productos} />
          </RutaProtegida>
        }/>
        {/* Ruta individual de cada producto */}
        <Route path='/productos/:id' element={<ProductosDetalle productos={productos}/>} />

        {/* Pagina general de servicios */}
        <Route path='/servicios' element={<Servicios/>}>
          <Route index element={<ServiciosHome/>} />
          <Route path='garantia' element={<ServiciosGarantia/>} />
          <Route path='lista' element={<ServiciosLista servicios={servicios}/>} />
          <Route path=':id' element={
            <>
              <ServiciosLista servicios={servicios}/>
              <ServiciosDetalle servicios={servicios}/>
            </>
          }/>
        </Route>

        <Route path='*' element={<Error404/>}/>
      </Routes>
    </>
  )
}

export default App
