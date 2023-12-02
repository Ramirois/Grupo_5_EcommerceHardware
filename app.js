const express = require ('express')
const path = require ('path');
const app = express();
const rutas = require('./src/routes/mainroutes');
const rutausuario = require('./src/routes/userroutes');
const rutaproductos = require('./src/routes/productroutes');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './src/views'));

app.listen(3000, () =>{
    console.log("Servidor corriendo en el servidor 3000");
});

app.use('/', rutas);

app.use('/usuario', rutausuario);

app.use('/producto', rutaproductos);
