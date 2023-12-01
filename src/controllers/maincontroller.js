const path = require('path');

const mainController = {
index: (req,res) => {
    res.sendFile(path.resolve(__dirname, '../views/index.html'));
}

}

module.exports = mainController;