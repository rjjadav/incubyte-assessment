const { add } = require('./calculator');

describe('Create string calculator', () => {
    test('Return 0 if blank string is passed', () => {
        expect(add('')).toBe(0)
    })
})