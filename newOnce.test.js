const newOnce = require('./newOnce');

describe("newOnce",()=>{
    test('Should call a return function single time', () => {
        const mockCallback = jest.fn(x => x+1);
        const te = newOnce(mockCallback);
        let res = te(1);
        let res1 = te(3);
        expect(res).toBe(2);
        expect(res1).toBe(2);
        expect(mockCallback).toHaveBeenCalledTimes(1)
      });
});

