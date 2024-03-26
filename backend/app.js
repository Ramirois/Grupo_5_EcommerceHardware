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
const db = require('./src/database/models');
const port = 3000;
const cors = require('cors');
const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware');
app.use(express.static(publicPath));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './src/views'));

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));





app.use(session({
    secret : 'topSecret',
    resave: true,
    saveUninitialized: true,
}));

app.use(userLoggedMiddleware);

app.use(cors());

app.use(cookieParser());

app.use(acceso);


const userApiRoutes = require('./src/routes/apiroutes/userRoutesApi');
const productApiRoutes = require('./src/routes/apiroutes/productRoutesApi');

app.use('/', rutas);

app.use('/usuario', rutausuario);

app.use('/producto', rutaproductos);

app.use('/api/users', userApiRoutes);

app.use('/api/products', productApiRoutes);

app.use(rutaadmin);

app.listen(port, () =>{
    console.log("Servidor corriendo en el servidor " + port);
   
});

