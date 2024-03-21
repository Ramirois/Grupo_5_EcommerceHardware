import React from 'react'
import { useState, useEffect } from 'react'

export const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const endpoint = "http://localhost:3000/api/products/productsByCategory";
        fetch(endpoint)
        .then(res => res.json())
        .then(categories => setCategories(categories.data))
        .catch(error => setError(error))
        .finally(() => setLoading(false))
    }, []);
    return (
        <div className="bg-gray-500 m-4 p-4 rounded-md">
      <h2 className="text-3xl text-center text-slate-300 font-bold">
        Categorías de productos
      </h2>
      {loading && <p>Los usuarios se estan cargando</p>}
      {error && <p>Hay errores </p>}
      {categories.length > 0 && (
        <div className="bg-slate-800 p-4 text-slate-100 rounded-lg">
          {categories.map((category) => (
            <div className='justify-center'>
                <h3 className='font-bold'>Categoría: {category.name}</h3>
                <small>Cantidad de productos: {category.product_count}</small>
            </div>
          ))}
        </div>
      )}
    </div>
    )
}
