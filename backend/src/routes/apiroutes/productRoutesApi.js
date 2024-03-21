const express = require ('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const fs = require('fs');
const multer = require('multer');
const { body } = require('express-validator');
const path = require('path');
const { list, detail, categories, productsByCategories, last } = require(path.resolve(__dirname, '../../controllers/apicontrollers/productControllerApi'));

//Get Request http://localhost:3000/api/products
router.get('/', list);

router.get('/detail/:id?*', detail);

//Get Request http://localhost:3000/api/productos/categories
router.get('/categories', categories);

router.get('/productsByCategory', productsByCategories);

router.get('/last', last);


module.exports = router;