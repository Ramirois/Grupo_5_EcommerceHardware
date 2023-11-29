const path = require('path');

const productController = {
    cart: (req, res)=>{
        res.sendFile(path.resolve(__dirname, '../views/productCart.html'));
    }
}

module.exports = productController;