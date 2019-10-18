import { arrDifference } from "../../../src/arr/difference";

describe("arrDifference", () => {
    it("returns difference", () => {
        expect(arrDifference([1, 2, 3], [1, "foo", 3])).toEqual([2]);
    });
    it("returns difference multiple", () => {
        expect(arrDifference([1, 2, 3], [100], [2, 0, 2])).toEqual([1, 3]);
    });
});
