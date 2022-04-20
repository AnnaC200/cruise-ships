const Port = require('../src/Port.js')


describe('port constructor', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });  

    it('can add a ship', () => {
        const port = new Port('Dover');
        const ship = {};

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });

    it('can remove a ship', () => {
        const port = new Port ('Dover');
        const titanic = {};
        const bloodyMary = {};

        port.addShip(titanic);
        port.addShip(bloodyMary);
        port.removeShip(bloodyMary);

        expect(port.ships).toEqual([titanic]); 
    })

})