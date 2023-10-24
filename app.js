const express = require ('express')
const path = require ('path');
const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(3000, () =>{
    console.log("Servidor corriendo en el servidor 3000");
});

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './src/views/home.html'));
})
//checar si está bien escrito el nombre de la ruta