const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const { validationResult } = require('express-validator');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op, where } = require("sequelize");
const moment = require('moment');


const userController = {
    list: (req, res) =>{
      db.User.findAll()
      .then(usuarios => {
        res.render('admin/userList', {usuarios})
      })
    },
    userDetail: (req, res) => {
      db.User.findByPk(req.params.id,
        { include : [{association: 'role'}]})
        .then(usuario=> res.render('admin/userDetail', {usuario}))
    },
    login: (req,res)=>{
    res.render('login');
},

    register: (req,res)=>{
      res.render('register');
},
    create: (req, res) => {
    let errors = validationResult(req);
    db.User.findOne({where: {email : req.body.email} })
    .then ((usuarioEncontrado) => {if (errors.isEmpty() && !usuarioEncontrado) {
        db.User.create({
          first_name: req.body.nombre,
          last_name: req.body.apellido,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 5),
          image:  req.file ? req.file.filename : '',
          role_id: 2
        })
        .then(res.redirect('/usuario/list'))
        } else {
          if(usuarioEncontrado) errors.errors.push({
            type: 'field',
            value: req.body.email,
            msg: 'Existe un usuario registrado con el email ingresado',
            path: 'email',
            location: 'body'
          });
        return res.render('register', {errors: errors.mapped(),  old: req.body});
        
      }
    })
  },
  edit: (req, res)=>{
    let pedidoRoles = db.Role.findAll()
    let pedidoUsuario = db.User.findByPk(req.params.id)
    Promise.all([pedidoRoles, pedidoUsuario])
    .then(([roles, usuario]) =>{res.render('admin/userEdit', {roles, usuario})})
  },
  update: (req, res)=>{
    db.User.update({
      first_name: req.body.nombre,
      last_name: req.body.apellido,
      email: req.body.email,
      role_id: req.body.rol
    },
    {where: {id: req.params.id}})
    .then(res.redirect('/usuario/list'))
  },
  destroy: (req, res) => {
    db.User.destroy({
      where: {id: req.params.id}
    })
    .then(res.redirect('/usuario/list'))
  },
ingresar: (req,res) =>{
  const errors = validationResult(req);
  if(errors.isEmpty()){
    
    db.User.findOne({where: {email: req.body.email}})
    .then((usuario) =>{
      if (usuario){
        const passwordOk = bcrypt.compareSync(req.body.password, usuario.password);
        console.log(req.body.password);
        console.log(usuario.password);
        if(passwordOk || (req.body.password == usuario.password)){
          delete usuario.password;
        req.session.userLogged = usuario;
        if(req.body.recordarme){
          res.cookie('email',req.body.email,{maxAge: 1000 * 60 * 60 * 24})
        }
        res.redirect('detalle/' + usuario.id);
        console.log(req.session);
        } else{
          errors.errors.push({
            type: 'field',
            value: req.body.email,
            msg: 'Credenciales inválidas',
            path: 'email',
            location: 'body'
          });
          console.log(errors);
          res.render('login',{errors:errors.mapped(),old:req.body}); 
        }
      } else {
        errors.errors.push({
          type: 'field',
          value: req.body.email,
          msg: 'Credenciales inválidas',
          path: 'email',
          location: 'body'
        });
        console.log(errors);
        res.render('login',{errors:errors.mapped(),old:req.body}); 
      }
    })
  } else res.render('login',{errors:errors.mapped(),old:req.body});
    
  },
  logout: (req,res) =>{
    req.session.destroy();
    res.cookie('email',null,{maxAge: -1});
    res.redirect('/')
  }

}

module.exports = userController;