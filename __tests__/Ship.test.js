const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js')

//.toBeInstanceOf - checks that an object is an instance of a class i.e. Ship
describe('ship constructor', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });  

 // four-phase test 1. set -up, 2. exercise/ execute set up, 3.the result of the exercise is verified against the developer’s expectations. 
    it('ship can set sail', () => {
        const dover = new Port('Dover');
        const ship = new Ship(dover);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
    });

    it('can dock at a different port', () => {
        const dover = new Port('Dover');
        const ship = new Ship(dover);

        const calais = new Port('Calais');
        ship.dock(calais);

        expect(ship.currentPort).toBe(calais);
    })
});





