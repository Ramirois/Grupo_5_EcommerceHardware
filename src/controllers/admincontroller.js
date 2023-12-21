const path = require('path');
const fs = require('fs');
const { log } = require('console');

module.exports = {
    index: (req,res) =>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));
        res.render(path.resolve(__dirname, '../views/admin/admin'), {productos});
    },
    create: (req,res)=>{
        //res.send('Estamos por aquí');
        res.render(path.resolve(__dirname,'../views/admin/create.ejs'))
        //res.send(path.resolve(__dirname));
    },
    save: (req,res)=>{
        // res.send('Estamos por aquí');
        //Recibir datos del Front-end al Backend: Formulario (req.body)
        //Query strings: req.query
        //Cuando vienen de una etiqueta <a> - Ancla req.params
        //console.log(req.body);
        //Leer el archivo en formato json
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));
        let ultimoElemento = productos.pop();
        productos.push(ultimoElemento);
        //Preparar la variable con el contenido de los datos nuevos
        let nuevoProducto = {
         id: ultimoElemento.id + 1,
         nombre: req.body.nombre,
         descripcion: req.body.descripcion,
         precio: req.body.precio,
         descuento: req.body.descuento,
         image: req.file.filename
         //imagen: req.file.filename
        }
        //console.log(nuevoProducto);
        //Agregamos nuestro nuevo producto al array
        productos.push(nuevoProducto);
        //Convertir nuestro array a un archivo en formato json
        let nuevoProductoGuardar = JSON.stringify(productos,null,2);
        //Guardar nuestro archivo
        fs.writeFileSync(path.resolve(__dirname,'../data/productos.json'),nuevoProductoGuardar);
        res.redirect('/admin');
     },
    show: (req,res)=>{
        //console.log(req.params);
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));
        let id = req.params.id;
        let miProducto;
        productos.forEach(producto => {
            if(producto.id == id){
                miProducto = producto;
            }
        });
        res.render(path.resolve(__dirname, '../views/admin/detail.ejs'),{miProducto})
    },
    edit : (req,res)=>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));
        let id = req.params.id;
        let productoEditar = productos.find(producto =>{
            return producto.id == id
        })
        res.render(path.resolve(__dirname,'../views/admin/edit.ejs'),{productoEditar})
    },
    update: (req, res) => {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));
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
        }
    }
    ,
    destroy: (req,res)=>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));  
        let id = req.params.id;
        let productosFinal = productos.filter(producto => producto.id != id)
        let prodctoGuardarFinal = JSON.stringify(productosFinal,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../data/productos.json'),prodctoGuardarFinal);
       res.redirect('/admin');
    }
}