const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const { validationResult } = require('express-validator');
const { Product, Category } = require('../../database/models');
const { Op, where } = require("sequelize");
const moment = require('moment');
const db = require('../../database/models')

const productController = {
    list: async (req, res) =>{
     try {
        const products = await Product.findAll({
            include: ['brand', 'category']
        })
        const response = {
            meta: {
                status: 200,
                message: 'Se recibieron productos correctamente',
                count: products.length
            },
            data: products
        }
        res.status(200).json(response);
     } catch (error) {
        console.log(error);
     } 
    },

    detail: async (req, res) =>{
        try {
            //localhost:3000/api/products/detail/1 || localhost:3000/api/products?id
            const product = await Product.findByPk(req.params.id || req.query.id, {
                include: ['brand', 'category'],
            });
            const response = {
                meta: {
                    status: 200,
                    message: 'Se recibieron productos correctamente'
                },
                data: product
            };
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    },
    categories: async (req, res) =>{
        try {
            const categories = await Category.findAll()
            const response = {
                meta: {
                    status: 200,
                    message: 'Se recibieron productos correctamente',
                    count: categories.length
                },
                data: categories
            }
            res.status(200).json(response);
         } catch (error) {
            console.log(error);
         }
    },
    productsByCategories: async (req, res) =>{
        try {
           const productsByCategories = await Category.findAll({
                attributes: ['id', 'name' ],
                include: [
                    {
                        model: Product,
                        as: 'products',
                        attributes: ['category_id']
                    }
                ],
                group: ['Category.id']
            });

            const formattedData = productsByCategories.map(category => ({
                id: category.id,
                name: category.name,
                product_count: (category.products) ? category.products.length : 0 // Accedemos a la propiedad products usando el alias 'products'
            }));

            const response = {
                meta: {
                    status: 200,
                    message: 'Se recibieron productos correctamente',
                    count: productsByCategories.length
                },
                data: formattedData
            }
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    },
    last: async(req, res) => {
        try {
            const ultimoProducto = await Product.findOne({
              order: [['created_at', 'DESC']]
            });
            const response = {
                meta: {
                    status: 200,
                    message: 'Se recibieron productos correctamente',
                },
                data: ultimoProducto
            }
            res.status(200).json(response);
          } catch (error) {
            console.error('Error al obtener el último producto:', error);
            throw error;
          }
        }
}

module.exports = productController;