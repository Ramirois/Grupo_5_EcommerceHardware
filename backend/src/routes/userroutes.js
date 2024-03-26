const express = require ('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const fs = require('fs');
const multer = require('multer');
const { body } = require('express-validator');
const path = require('path');
const userController = require(path.resolve(__dirname, '../controllers/usercontroller'));

let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json')))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/img/usuarios'));    //Aquí deben indicar donde van a guardar la imagen
    },
    filename: function (req, file, cb) {
      cb(null, 'foto' + '-' + Date.now()+ path.extname(file.originalname));      
    }
  })
   
const upload= multer({ storage })


const validacionesLogin = [
    body('email').isEmail().withMessage('Agregar un email válido'),
    body('password').isLength({min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),
    body('email').custom( (value  ) =>{
      for (let i = 0; i < archivoUsuarios.length; i++) {
          if (archivoUsuarios[i].email == value) {
              return true    
          }
      }
      return false
    }).withMessage('Usuario no se encuentra registrado...'),
  
    
    body('password').custom( (value, {req}) =>{
        for (let i = 0; i < archivoUsuarios.length; i++) {
            if (archivoUsuarios[i].email == req.body.email) {
                if(bcrypt.compareSync(value, archivoUsuarios[i].password)){
                  return true;
                }else{
                  return false;
                }
            }
        }
        
    }).withMessage('Usurio o contraseña no coinciden'),
]

const validacionesRegistro = [
      
    body('nombre').isLength({
          min: 2
        }).withMessage('El campo nombre no puede estar vacío'),
      body('apellido').isLength({min: 2
        }).withMessage('El campo apellido no puede estar vacío'),
      body('email').isEmail().withMessage('Agregar un email válido'),
  
       
      body('password').isLength({min: 8 }).withMessage('La contraseña debe tener un mínimo de 8 caractéres'),
      
      
      body('confirmarpassword').isLength({min: 8 }).withMessage('La confirmación de la contraseña debe tener un mínimo de 8 caractéres'),
  
     
  
      body('confirmarpassword').custom((value, {req}) =>{
          if(req.body.password == value ){
              return true        
          }else{
              return false   
          }    
      }).withMessage('Las contraseñas deben ser iguales'),
  
      
      body('avatar').custom((value, {req}) =>{
          if(req.file != undefined){
              return true
          }
          return false;
      }).withMessage('Debe elegir su avatar y debe ser un archivo con formato: .JPG o JPEG o PNG')
    ]

router.get('/login', userController.login);
router.post('/login',userController.ingresar);
router.get('/register', userController.register);
router.post('/register', upload.single('avatar'),validacionesRegistro, userController.create);
router.get('/logout', userController.logout);
router.get('/list', userController.list);
router.get('/detalle/:id', userController.userDetail);
router.get('/edit/:id', userController.edit);
router.put('/edit/:id', userController.update);
router.get('/delete/:id', userController.destroy);


module.exports = router;