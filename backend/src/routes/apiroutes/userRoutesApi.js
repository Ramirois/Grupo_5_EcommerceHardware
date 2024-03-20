const express = require ('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const fs = require('fs');
const multer = require('multer');
const { body } = require('express-validator');
const path = require('path');
const { list, detail } = require(path.resolve(__dirname, '../../controllers/apicontrollers/userControllerApi'));

//Get Request http://localhost:3000/api/users
router.get('/', list);

router.get('/detail/:id?*', detail);



module.exports = router;