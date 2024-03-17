const path = require('path');
const fs = require('fs');
const { log } = require('console');
const { validationResult } = require('express-validator');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

//algunos métodos que usaban los json como data quedan comentados

module.exports = {
    index: (req,res) =>{
        db.Product.findAll()
        .then(productos => {
            res.render('admin/admin', {productos});
        })
        
    },
    new: (req,res)=>{
        let pedidoCategorias = db.Category.findAll()
        let pedidoColores = db.Color.findAll()
        let pedidoMarcas = db.Brand.findAll()
        Promise.all([pedidoCategorias, pedidoColores, pedidoMarcas])
        .then((([categorias, colores, marcas]) => {
        res.render('admin/create', {categorias:categorias , colores:colores, marcas:marcas});
    }))
    },
    create: (req,res)=>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.Product.create(
                {
                 name: req.body.nombre,
                 description: req.body.descripcion,
                 color_id: req.body.color,
                 category_id: req.body.categoria,
                 brand_id: req.body.marca,
                 price: req.body.precio,
                 image: req.file.filename
                })
                .then(() => {
                    res.redirect('/admin');
                })
        } else {
            let pedidoCategorias = db.Category.findAll()
        let pedidoColores = db.Color.findAll()
        let pedidoMarcas = db.Brand.findAll()
        Promise.all([pedidoCategorias, pedidoColores, pedidoMarcas])
        .then((([categorias, colores, marcas]) => {
        res.render('admin/create', {errors: errors.mapped(),  old: req.body, categorias:categorias , colores:colores, marcas:marcas});
    }))
        }
        
     },
    show: (req,res)=>{
        //console.log(req.params);
        //let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));
        //let id = req.params.id;
        /* productos.forEach(producto => {
            if(producto.id == id){
                miProducto = producto;
            }
        }); */
        db.Product.findByPk(req.params.id)
        .then(
            producto => {
                res.render('admin/detail',{producto})
            })
    },
    edit : (req,res)=>{
      /*   let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));
        let id = req.params.id;
        let productoEditar = productos.find(producto =>{
            return producto.id == id
        })
        res.render(path.resolve(__dirname,'../views/admin/edit.ejs'),{productoEditar}) */

        let pedidoProducto = db.Product.findByPk(req.params.id);
        let pedidoCategorias = db.Category.findAll();
        let pedidoColores = db.Color.findAll();
        let pedidoMarcas = db.Brand.findAll();
        Promise.all([pedidoProducto, pedidoCategorias, pedidoColores, pedidoMarcas])
        .then(([producto, categorias, colores, marcas]) =>{
            res.render('admin/edit', {producto:producto, categorias:categorias, colores:colores, marcas:marcas})
        })
    },
    update: (req, res) => {
        db.Product.update({
            name: req.body.nombre,
            description: req.body.descripcion,
            color_id: req.body.color,
            category_id: req.body.categoria,
            brand_id: req.body.marca,
            price: req.body.precio,
            //image: req.file.filename
           },
           {
            where: {id: req.params.id}
           })
           .then(()=> res.redirect('/admin'))
    }
    ,
    destroy: (req,res)=>{
        /* let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));  
        let id = req.params.id;
        let productosFinal = productos.filter(producto => producto.id != id)
        let prodctoGuardarFinal = JSON.stringify(productosFinal,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../data/productos.json'),prodctoGuardarFinal);
       res.redirect('/admin'); */

       db.Product.destroy({
        where: {id: req.params.id
        }
       })
       .then(()=> res.redirect('/admin'))
    }
}