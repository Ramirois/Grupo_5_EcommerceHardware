const path = require('path');
const fs = require('fs');
const { log } = require('console');
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
        Promise.all([pedidoCategorias, pedidoColores])
        .then((([categorias, colores]) => {
        res.render('admin/create', {categorias:categorias , colores:colores});
    }))
    },
    create: (req,res)=>{
        db.Product.create(
        {
         name: req.body.nombre,
         description: req.body.descripcion,
         color_id: req.body.color,
         category_id: req.body.categoria,
         price: req.body.precio,
         image: req.file.filename
        })
        .then(() => {
            res.redirect('/admin');
        })
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
        Promise.all([pedidoProducto, pedidoCategorias, pedidoColores])
        .then(([producto, categorias, colores]) =>{
            res.render('admin/edit', {producto:producto, categorias:categorias, colores:colores})
        })
    },
    update: (req, res) => {
        /* let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));
        let id = req.params.id;
    
        // Buscar el índice del producto a actualizar
        let index = productos.findIndex(producto => producto.id == id);
    
        if (index !== -1) {
            // Crear una copia modificada del producto
            let productoActualizado = { ...productos[index], ...req.body };
            productos[index] = productoActualizado;
    
            // Convertir el array de productos a cadena JSON
            let productosActualizadosString = JSON.stringify(productos, null, 2);
    
            // Escribir la cadena JSON actualizada en el archivo
            fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), productosActualizadosString);
    
            res.redirect('/admin');
        } else {
            res.status(404).send('Producto no encontrado');
        } */

        db.Product.update({
            name: req.body.nombre,
            description: req.body.descripcion,
            color_id: req.body.color,
            category_id: req.body.categoria,
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