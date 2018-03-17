const { forEachDeep } = require("../../dist/lightdash.common");

describe("forEachDeep", () => {
    it("Empty", () => {
        const input = [];
        const result = [];

        forEachDeep(input, val => {
            result.push(val);
        });

        expect(result).toEqual([]);
    });
    it("Simple", () => {
        const input = [1, 2, {}, 3, 4, [5, {}, 6, [7, 8, {}], 9]];
        const result = [];

        forEachDeep(input, val => {
            result.push(val);
        });

        expect(result).toEqual([1, 2, {}, 3, 4, 5, {}, 6, 7, 8, {}, 9]);
    });
    it("Circular", () => {
        const input = [1, 2, 3, null];
        const result = [];

        input[3] = input;

        expect(() => {
            forEachDeep(input, val => {
                result.push(val);
            });
        }).toThrowError("Maximum call stack size exceeded");
    });
});
