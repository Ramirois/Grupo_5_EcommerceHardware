const path = require('path');

const productController = {
    cart: (req, res)=>{
        res.render(path.resolve(__dirname, '../views/productCart'));
    },
    detail: (req, res)=>{
        res.render(path.resolve(__dirname, '../views/productDetail'));
    }
}

module.exports = productController;