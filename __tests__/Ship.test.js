const Ship = require('../src/Ship.js')

//.toBeInstanceOf - checks that an object is an instance of a class i.e. Ship
describe('ship constructor', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    })  
 // four-phase test
    it('ship can set sail', () => {
        //1. set up
        const ship = new Ship ('Dover'); 

        //2. exercise/ execute set up
        ship.setSail();

        //3. the result of the exercise is verified against the developer’s expectations.
        expect(ship.startingPort).toBeFalsy();
    });
});



