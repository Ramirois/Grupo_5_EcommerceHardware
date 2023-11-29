const express = require ('express');
const router = express.Router();
const productController = require('../controllers/productcontroller')

router.get('/productCart', productController.cart);

module.exports = router;