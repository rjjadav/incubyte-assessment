const { add } = require('./calculator');

describe('Create string calculator', () => {
    test('Return 0 if blank string is passed', () => {
        expect(add('')).toBe(0)
    })

    test('Return the number itself for a single number', () => {
        expect(add("1")).toBe(1);
        expect(add("5")).toBe(5);
    });

    test('Return sum for two comma separated value as string', () => {
        expect(add("1,5")).toBe(6);
        expect(add("3,5")).toBe(8);
    });

    test('Return sum if new line is used as delimiter', () => {
        expect(add('1\n2,3')).toBe(6);
    });

    test('Return sum if other special charaters are used in before new line', () => {
        expect(add("//;\n1;2")).toBe(3);
    })

    test('Throws an error if negative numbers are present', () => {
        expect(() => add("1,-2,3,-5")).toThrow("Negative numbers are not allowed: -2,-5");
    });

    test('Return the Output for 12,ab,34,cd', () => {
        expect(() => add("12,ab,34,cd")).toThrow("Strings are not allowed: ab,cd");
    })
})