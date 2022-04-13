//defines a FUNCTION Ship 
function Ship(port) {
    this.currentPort = port;
    }

Ship.prototype.setSail = function () {
    this.currentPort = null;
};

Ship.prototype.dock = function (port) {
    this.currentPort = port;
};




//exports the Ship FUNCTION from the file
module.exports = Ship;
