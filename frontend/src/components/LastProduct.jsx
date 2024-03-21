import React from 'react'
import { useState, useEffect } from "react";

export const LastProduct = () => {
    const [lastProduct, setLastProduct] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const url = "http://localhost:3000/api/products/last";
        fetch(url)
            .then((res) => res.json())
            .then((lastProduct) => setLastProduct(lastProduct.data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }, []);
    return (
        <div className='justify-center bg-slate-700'>
            <h2 className='text-3xl text-center text-slate-100 font-bold'>Último producto creado</h2>
            {loading && <p className='text-xl text-center text-slate-100'>Cargando...</p>}
            {error && <p className='text-xl text-center text-red-5  00'>{error.message}</p>}
            {lastProduct && <div className='bg-slate-800 p-4 text-slate-100 justify-center'>

                <small>{lastProduct.name}</small>
                <p>{lastProduct.description}</p>
                <img src={`http://localhost:3000/img/productos/${lastProduct.image}`} alt="imagen-producto" className='w-20'/>
            </div>}
        </div>
    )
}
