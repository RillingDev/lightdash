const { isObject, forEachDeep } = require("../../dist/lightdash.common");

describe("forEachDeep", () => {
    it("Simple", () => {
        const input = [1, 2, {}, 3, 4, [5, {}, 6, [7, 8, {}], 9]];
        const result = [];

        forEachDeep(input, val => {
            if (!isObject(val)) {
                result.push(val);
            }
        });

        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});
