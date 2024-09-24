import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-blue-600 py-4 min-w-max'>
      <div className='container mx-auto flex flex-col sm:flex-row justify-between items-center px-4'>
        <img 
          src="adidas.png" 
          alt="adidas logo" 
          className='w-32'
          />

        <nav className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mt-4'>
            <NavLink 
              to='/'
              className={({ isActive }) => 
                `text-3xl transform hover:scale-105 transition duration-100 ${isActive ? 'text-blue-400' : 'text-white'}`
              }
              >Inicio
            </NavLink>

            <NavLink 
              to='/servicios'
              className={({ isActive }) => 
                `text-3xl transform hover:scale-105 transition duration-100 ${isActive ? 'text-blue-400' : 'text-white'}`
              }
              >Servicios
            </NavLink>

            <NavLink 
              to='/tienda'
              className={({ isActive }) => 
                `text-3xl transform hover:scale-105 transition duration-100 ${isActive ? 'text-blue-400' : 'text-white'}`
              }
              >Tienda
            </NavLink>

            <NavLink 
              to='/contacto'
              className={({ isActive }) => 
                `text-3xl transform hover:scale-105 transition duration-100 ${isActive ? 'text-blue-400' : 'text-white'}`
              }
              >Contacto
            </NavLink>
        </nav>
      </div>
    </header>
  )
}
