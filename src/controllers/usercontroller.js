const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');

const { validationResult } = require('express-validator');


const userController = {
    login: (req,res)=>{
    res.render(path.resolve(__dirname, '../views/login'));
},

    register: (req,res)=>{
    res.render(path.resolve(__dirname, '../views/register'));
},
    create: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let user = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        avatar:  req.file ? req.file.filename : '',
        role: 1
      }
      let archivoUsers = fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json'), {
        encoding: 'utf-8'
      });
      let users;
      if (archivoUsers == "") {
        users = [];
      } else {
        users = JSON.parse(archivoUsers);
      };

      users.push(user);
      usersJSON = JSON.stringify(users, null, 2);
      fs.writeFileSync(path.resolve(__dirname, '../data/usuarios.json'), usersJSON);
      res.redirect('/usuario/login');
    } else {
      //return res.send(errors);

      //Aquí incoporé el old: req.body  --> Para poder enviar a la vista los datos que el usuario indique y no tienen errores entonces deben persistir lo que el usuario escribio

      //Si desean especificar debajo de cada input el mendaje de error específico, entonces deben enviar a la vista los errores de la siguiente manera: errors: errors.mapped()
      //Después en la vista para mostrar debajo del input el respectivo error sólo deben hacer lo siguiente:
      /*
      <div class="col-12">
                          <label for="username" class="form-label">Username: *</label>
                          <input type="text" id="username" name="username" placeholder="Ej: Daniel Fuentes" class="form-input"
                              value="<%= typeof old != 'undefined' ? old.username : '' %>">
                          <p class="text-danger"><%= typeof errors == 'undefined' ? '' : errors.username ? errors.username.msg : '' %></p>
              </div> 
      */

      return res.render(path.resolve(__dirname, '../views/register.ejs'), {
        errors: errors.errors,  old: req.body
      });
    }
  },
ingresar: (req,res) =>{
    const errors = validationResult(req);

    if(errors.isEmpty()){
      let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/usuarios.json')));
      let usuarioLogueado = archivoUsuarios.find(usuario => usuario.email == req.body.email)
      
      delete usuarioLogueado.password;
      req.session.usuario = usuarioLogueado; 
      if(req.body.recordarme){
        res.cookie('email',usuarioLogueado.email,{maxAge: 1000 * 60 * 60 * 24})
      }
      return res.redirect('/');  
    }else{
      
      res.render(path.resolve(__dirname, '../views/login'),{errors:errors.mapped(),old:req.body});        
    }
  },
  logout: (req,res) =>{
    req.session.destroy();
    res.cookie('email',null,{maxAge: -1});
    res.redirect('/')
  }


}

module.exports = userController;