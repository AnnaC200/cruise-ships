const Port = require('../src/Port.js')


describe('port constructor', () => {
    describe ('with ports and itinerary', () => {
        let ship; //using let outside of the beforeEach to assign variable
        let dover;
        let itinerary;

        beforeEach(() => {
            dover = new Port('Dover');
        });

    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it('can add a ship', () => {
       
        const ship = jest.fn();

       dover.addShip(ship);

        expect(dover.ships).toContain(ship);
    });

    it('can remove a ship', () => {
        
        const titanic = jest.fn();
        const bloodyMary = jest.fn();

        dover.addShip(titanic);
        dover.addShip(bloodyMary);
        dover.removeShip(bloodyMary);

        expect(dover.ships).toEqual([titanic]); 
    })
    })
})