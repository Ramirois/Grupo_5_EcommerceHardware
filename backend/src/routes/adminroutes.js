const express = require ('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { body } = require('express-validator');

const admincontroller = require(path.resolve(__dirname,'../controllers/admincontroller'));

const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, path.resolve(__dirname, '../../public/img/productos'))
    },
    filename: (req, file, cb)=> {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        console.log(fileName)
        cb(null,fileName)
    }
})
const upload = multer({storage});

const validacionesProductos = [
    body('nombre').isLength({ min: 5}).withMessage('El nombre debe tener al menos 5 caracters'),
    body('descripcion').isLength({ min: 20 }).withMessage('La descripción debe tener al menos 20 caracteres'),
    body('image').custom((value, {req}) =>{
        if(req.file != undefined){
            return true;
        }
        return false;
    }).withMessage('Debe adjuntar una imagen con formato: .JPG o JPEG o PNG')
]


router.get('/admin', admincontroller.index);
router.get('/admin/create', admincontroller.new);
router.post('/admin/create', upload.single('image'), validacionesProductos, admincontroller.create);
router.get('/admin/detail/:id', admincontroller.show);
router.get('/admin/edit/:id', admincontroller.edit);
router.put('/admin/edit/:id',admincontroller.update);
router.get('/admin/delete/:id', admincontroller.destroy);

module.exports = router;