import { arrIntersection } from "../../src/arr/intersection";

describe("arrDifference", () => {
    it("returns intersection", () => {
        expect(
            arrIntersection([1, 2, 3], [1, "foo", 3])
        ).toEqual([1, 3]);
    });
    it("returns intersection multiple", () => {
        expect(
            arrIntersection([1, 2, 3], ["foo"], [2, 0, 2])
        ).toEqual([2]);
    });
});
