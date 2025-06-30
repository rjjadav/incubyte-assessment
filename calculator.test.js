const { add } = require('./calculator');

describe('Create string calculator', () => {
    test('Return 0 if blank string is passed', () => {
        expect(add('')).toBe(0)
    })

    test('returns the number itself for a single number', () => {
        expect(add("1")).toBe(1);
        expect(add("5")).toBe(5);
    });

    test('return sum for two comma separated value as string', () => {
        expect(add("1,5")).toBe(6);
        expect(add("3,5")).toBe(8);
    })

    test('return sum if new line is used as delimiter', () => {
        expect(add('1\n2,3')).toBe(6);
    })
})