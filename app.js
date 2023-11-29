const express = require ('express')
const path = require ('path');
const app = express();
const rutas = require('./src/routes/mainRoutes');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './src/views'));

app.listen(3000, () =>{
    console.log("Servidor corriendo en el servidor 3000");
});

app.use('/', rutas);

app.get('/login.html', (req,res) => {
    res.sendFile(path.resolve(__dirname, './src/views/login.html'));
})

app.get('/register.html', (req,res) => {
    res.sendFile(path.resolve(__dirname, './src/views/register.html'));
})
app.get('/register.html', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})

app.get('/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})
//checar si está bien escrito el nombre de la ruta

app.get('/productCart.html', (req,res)=> {
    res.sendFile(path.resolve(__dirname, './src/views/productCart.html'));
})
app.get('/register.html', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})

app.get('/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})
//checar si está bien escrito el nombre de la ruta
