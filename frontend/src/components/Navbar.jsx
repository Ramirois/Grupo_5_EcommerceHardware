import React from 'react'
import logo_tecnopoint from './../assets/logo_tecnopoint.png'

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-2">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Primera línea */}
        <div className="flex items-center">
          <a href="#" className="text-white font-bold mr-4"><img src={logo_tecnopoint} alt="" className='w-20' /></a>
          <ul className="flex">
            <li className="mr-6">
              <a href="#" className="text-white hover:text-gray-300">Inicio</a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-white hover:text-gray-300">Acerca de</a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-white hover:text-gray-300">Servicios</a>
            </li>
          </ul>
        </div>

        {/* Segunda línea */}
        <div className="flex items-center mt-4 lg:mt-0">
          <input type="text" placeholder="Buscar" className="bg-gray-700 text-white py-1 px-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
          <button className="ml-2 bg-blue-500 hover:bg-blue-600 py-1 px-4 text-white rounded-lg">Buscar</button>
        </div>
      </div>
    </nav>
  )
}


