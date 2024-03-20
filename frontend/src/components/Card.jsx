import React from 'react'

export const Card = ({ product }) => {
    const { name, description, brand, image} = product;
  return (
    <article className='max-w-80 bg-slate-500 text-center'>
              <h3 className='font-bold'>{name}</h3>
              <small>{description}</small>
              <p>{brand.name}</p>
              <img src={`http://localhost:3000/img/productos/${image}`} alt="imagen-producto" className=''/>
          </article>
  )
}
