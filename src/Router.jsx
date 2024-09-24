import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contacto from './views/Contacto'
import Inicio from './views/Inicio'
import Servicios from './views/Servicios'
import Tienda from './views/Tienda'
import Layout from './layouts/Layout'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Inicio />} />
                <Route path='/servicios' element={<Servicios />} />
                <Route path='/tienda' element={<Tienda />} />
                <Route path='/contacto' element={<Contacto />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
