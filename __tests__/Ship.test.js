const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');
const Itinerary = require('../src/Itinerary');

//.toBeInstanceOf - checks that an object is an instance of a class i.e. Ship
describe('ship constructor', () => {
    it('can be instantiated', () => {
        const port = new Port ('Dover');
        const itinerary = new Itinerary ([port]);
        const ship = new Ship(itinerary);

        expect(Ship).toBeInstanceOf(Object);
    });  

    it('has a starting port', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
      
        expect(ship.currentPort).toBe(port);
    });

 // four-phase test 1. set -up, 2. exercise/ execute set up, 3.the result of the exercise is verified against the developer’s expectations. 
    it('can set sail', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);
    
        ship.setSail();
    
        expect(ship.currentPort).toBeFalsy();
    });

    it('can dock at a different port', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais])
        const ship = new Ship(itinerary);
      
        ship.setSail();
        ship.dock();
      
        expect(ship.currentPort).toBe(calais);
    });

    it('can\'t sail further than its itinerary', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });
});





