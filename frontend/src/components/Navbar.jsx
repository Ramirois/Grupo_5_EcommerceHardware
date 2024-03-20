import React from 'react'
import logoReact from './../assets/react.svg'

export const Navbar = () => {
  return (
    <nav className='flex justify-around bg-cyan-800 py-1'>
        <img src={logoReact} alt="" />
        <ul className='flex gap-1 text-xl'>
            <li><a href="/products"></a>Product</li>
            <li><a href="/products/:id"></a>Detail</li>
            <li><a href="/users"></a>Users</li>
            <li><a href="/users/profile"></a>Profile</li>
        </ul>
    </nav>
  )
}
