const Ship = require('../src/Ship.js')

//.toBeInstanceOf - checks that an object is an instance of a class i.e. Ship
describe('ship constructor', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    })  

    it('has a starting port', () => {
        const ship = new Ship ('Dover');

        expect(ship.startingPort).toBe('Dover');
    });
})

// describe('setSail', () => {
//     it('ship to set sail from port', () => {
//         const ship = new Ship();
//         expect(ship.setSail).toEqual(setSail);
//     })
// })

