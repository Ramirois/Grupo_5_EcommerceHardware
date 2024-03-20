const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const { validationResult } = require('express-validator');
const { Product } = require('../../database/models');
const { Op, where } = require("sequelize");
const moment = require('moment');


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
    }
}

module.exports = productController;