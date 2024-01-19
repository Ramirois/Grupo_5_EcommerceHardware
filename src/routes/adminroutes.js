const express = require ('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

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


router.get('/admin', admincontroller.index);
//router.get('/admin/create', admincontroller.create);
router.post('/admin/create', upload.single('image'), admincontroller.create);
router.get('/admin/detail/:id', admincontroller.show);
router.get('/admin/edit/:id', admincontroller.edit);
router.put('/admin/edit/:id',admincontroller.update);
router.get('/admin/delete/:id', admincontroller.destroy);

module.exports = router;