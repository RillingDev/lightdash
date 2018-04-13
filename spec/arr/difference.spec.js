const { arrDifference } = require("../../dist/lightdash.common");

describe("arrDifference", () => {
    it("Empty", () => {
        expect(arrDifference([], [1, "foo", 3])).toEqual([]);
        expect(arrDifference([1, 2, 3], [])).toEqual([1, 2, 3]);
        expect(arrDifference([], [])).toEqual([]);
    });
    it("Simple", () => {
        expect(arrDifference([1, 2, 3], [1, "foo", 3])).toEqual([2]);
        expect(arrDifference([1, 2, 3], ["foo"], [2, 0, 2])).toEqual([1, 3]);
    });
});
