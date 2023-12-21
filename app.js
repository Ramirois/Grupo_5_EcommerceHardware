const express = require ('express')
const path = require ('path');
const app = express();
const rutas = require('./src/routes/mainroutes');
const rutausuario = require('./src/routes/userroutes');
const rutaproductos = require('./src/routes/productroutes');
const rutaadmin = require('./src/routes/adminroutes');
const methodOverride = require('method-override');
const publicPath = path.resolve(__dirname, './public');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const acceso = require(path.resolve(__dirname, './src/middlewares/acceso'));
const mantenimiento = require(path.resolve(__dirname, './src/middlewares/mantenimiento'));

app.use(express.static(publicPath));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './src/views'));

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));



app.use(session({
    secret : 'topSecret',
    resave: true,
    saveUninitialized: true,
}))

app.use(cookieParser());

app.use(acceso);



app.use('/', rutas);

app.use('/usuario', rutausuario);

app.use('/producto', rutaproductos);

app.use(rutaadmin);

app.listen(3000, () =>{
    console.log("Servidor corriendo en el servidor 3000");
});