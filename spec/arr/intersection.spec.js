const { arrIntersection } = require("../../dist/lightdash.common");

describe("arrIntersection", () => {
    it("Empty", () => {
        expect(arrIntersection([], [1, "foo", 3])).toEqual([]);
        expect(arrIntersection([1, 2, 3], [])).toEqual([]);
        expect(arrIntersection([], [])).toEqual([]);
    });
    it("Simple", () => {
        expect(arrIntersection([1, 2, 3], [1, "foo", 3])).toEqual([1, 3]);
        expect(arrIntersection([1, 2, 3], ["foo"], [2, 0, 2])).toEqual([2]);
    });
});
