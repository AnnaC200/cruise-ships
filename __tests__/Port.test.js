const Port = require('../src/Port.js')


describe('port constructor', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });  

    it('port has name property', () => {
        const port = new Port('Hull');
        expect(port.name).toEqual('Hull');
    })
})