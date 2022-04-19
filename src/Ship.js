//defines a Ship constructor
function Ship (itinerary) {
    // pass an instance of ITINERARY into SHIP constructor.
    this.itinerary = itinerary;
    //Assign an ITINERARY property so we can keep accessing it. 
    this.currentPort = itinerary.ports[0];
    //retrieving ports via itinerary and using [] to access the first array
    this.previousPort = null
  }

Ship.prototype.setSail = function () {
    const itinerary = this.itinerary;
    const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

    if (currentPortIndex === (itinerary.ports.length - 1)) {
        throw new Error('End of itinerary reached');
    }

    this.previousPort = this.currentPort;
    this.currentPort = null;
};

Ship.prototype.dock = function () {
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

    this.currentPort = itinerary.ports[previousPortIndex + 1];
}






//exports the Ship FUNCTION from the file
module.exports = Ship;

