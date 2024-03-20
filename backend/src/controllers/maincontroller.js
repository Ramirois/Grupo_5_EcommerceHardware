const path = require('path');

const mainController = {
    index: (req, res)=>{
        res.render(path.resolve(__dirname, '../views/index'));
    }
}

module.exports = mainController;
