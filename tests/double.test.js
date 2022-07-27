const double = require('../double')

test("testing if the array value is doubled", ()=>{
    expect(double([1, 2, 3, 4])).toStrictEqual([2, 4, 6, 8])
})