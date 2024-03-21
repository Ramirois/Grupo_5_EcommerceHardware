import React from 'react'
import { useState, useEffect } from "react";

export const Resume = () => {
    const [users, setUsers] = useState(0);
    const [products, setProducts] = useState(0);
    const [categories, setCategories] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = "http://localhost:3000/api/users";
        fetch(url)
          .then((res) => res.json())
          .then((users) => setUsers(users.meta.count))
          .catch((error) => setError(error))
      }, []);

      useEffect(() => {
        const url = "http://localhost:3000/api/products";
        fetch(url)
          .then((res) => res.json())
          .then((products) => setProducts(products.meta.count))
          .catch((error) => setError(error))
      }, []);

      useEffect(() => {
        const url = "http://localhost:3000/api/products/categories";
        fetch(url)
          .then((res) => res.json())
          .then((categories) => setCategories(categories.meta.count))
          .catch((error) => setError(error))
      }, []);

  return (
    <div className=' grid cols-1 bg-slate-600 text-slate-100 justify-center'>
        <h3>Total de usuarios: {users}</h3>
        <h3>Total de productos: {products}</h3>
        <h3>Total de categorías: {categories}</h3>
    </div>
  )
}
