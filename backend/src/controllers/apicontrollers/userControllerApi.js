const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const { validationResult } = require('express-validator');
const { User } = require('../../database/models');
const { Op, where } = require("sequelize");
const moment = require('moment');


const userController = {
    list: async (req, res) =>{
     try {
        const users = await User.findAll({
            include: ['role']
        })
        const response = {
            meta: {
                status: 200,
                message: 'Se recibieron usuarios correctamente',
                count: users.length
            },
            data: users
        }
        res.status(200).json(response);
     } catch (error) {
        console.log(error);
     } 
    },

    detail: async (req, res) =>{
        try {
            //localhost:3000/api/users/detail/1 || localhost:3000/api/users?id
            const user = await User.findByPk(req.params.id || req.query.id, {
                include: ['role'],
            });
            const response = {
                meta: {
                    status: 200,
                    message: 'Se recibieron usuarios correctamente'
                },
                data: user
            };
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = userController;