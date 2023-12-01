const path = require('path');

const userController = {
    login: (req,res)=>{
    res.render(path.join(__dirname, '../views/login'));
},

    register: (req,res)=>{
    res.render(path.resolve(__dirname, '../views/register'));
}
}

module.exports = userController;