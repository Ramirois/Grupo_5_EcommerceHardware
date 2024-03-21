import React from 'react'
import { Link } from 'react-router-dom'

export const Panel = () => {
  return (
    <div className=' grid grid-cols-3 gap-10 px-20 py-10 justify-center'>
        <button className="bg-blue-500 text-white p-10 rounded hover:bg-blue-600"><Link to="/">Inicio</Link></button>
        <button className="bg-blue-500 text-white p-10 rounded hover:bg-blue-600"><Link to="/resume">Resumen</Link></button>
        <button className="bg-blue-500 text-white p-10 rounded hover:bg-blue-600"><Link to="/users">Ver usuarios</Link></button>
        <button className="bg-blue-500 text-white p-10 rounded hover:bg-blue-600"><Link to="/products">Ver productos</Link></button>
        <button className="bg-blue-500 text-white p-10 rounded hover:bg-blue-600"><Link to="/categories">Productos por categoría</Link></button>
        <button className="bg-blue-500 text-white p-10 rounded hover:bg-blue-600"><Link to="/lastProduct"> Último producto creado</Link></button>
      </div>
  )
}
