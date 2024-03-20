import React from 'react'
import { Link } from 'react-router-dom'

export const Panel = () => {
  return (
    <div className=' grid grid-cols-3 gap-10 px-20 py-10 justify-center'>
        <button className="bg-blue-500 text-white p-10 rounded"><Link to="/">Opción 1</Link></button>
        <button className="bg-blue-500 text-white rounded"><Link to="/users">Opción 2</Link></button>
        <button className="bg-blue-500 text-white p-10 rounded"><Link to="/products">Opción 3</Link></button>
        <button className="bg-blue-500 text-white p-10 rounded">Opción 4</button>
        <button className="bg-blue-500 text-white p-10 rounded">Opción 5</button>
        <button className="bg-blue-500 text-white p-10 rounded">Opción 6</button>
      </div>
  )
}
