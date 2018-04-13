const { arrFlattenDeep } = require("../../dist/lightdash.common");

describe("arrFlattenDeep", () => {
    it("Empty", () => {
        expect(arrFlattenDeep([])).toEqual([]);
    });
    it("Simple", () => {
        expect(arrFlattenDeep([1, 2, [3]])).toEqual([1, 2, 3]);
        expect(arrFlattenDeep([1, 2, [3, [[[5]]], [6, [6]]]])).toEqual([
            1,
            2,
            3,
            5,
            6,
            6
        ]);
    });
});
