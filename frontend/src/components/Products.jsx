import React from 'react'
import { useState, useEffect } from 'react';
import { Card } from './Card';

export const Products = () => {
const [products, setProducts] = useState([]);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(()=> {
    const endpoint = "http://localhost:3000/api/products";
    fetch(endpoint)
    .then(res => res.json())
    .then(products => setProducts(products.data))
    .catch(error => setError(error))
    .finally(() => setLoading(false))
}, []);


  return (
    <div className='bg-gray-600 m-4 p-4'>
        <h1 className='text-3xl text-center text-slate-100 font-bold'>Product List</h1>

        {loading && <p className='text-xl text-center text-slate-100'>Cargando...</p>}
        {error && <p className='text-xl text-center text-red-5  00'>{error.message}</p>}
        {products.length > 0 && (<div className='bg-slate-800 p-4 text-slate-100 flex gap-4 flex-wrap justify-center'>
          {products.map(product => {
            return(
              <Card key={product.id} product = {product}/>
            )
          })}
            
        </div>)}
    </div>
  )
}
