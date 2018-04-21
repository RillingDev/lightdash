const { arrStep } = require("../../dist/lightdash.common");

describe("arrStep", () => {
    it("Empty", () => {
        expect(arrStep([], 2)).toEqual([]);
    });
    it("No Step", () => {
        expect(arrStep([1, 2, 3, 4, 5, 6], 0)).toEqual([]);
    });
    it("Step 1", () => {
        expect(arrStep([1, 2, 3, 4, 5, 6], 1)).toEqual([1, 2, 3, 4, 5, 6]);
    });
    it("Negative Step", () => {
        expect(arrStep([1, 2, 3, 4, 5, 6], -3)).toEqual([1, 4]);
    });
    it("Invalid Step", () => {
        expect(arrStep([1, 2, 3, 4, 5, 6], "foo")).toEqual([]);
    });
    it("Simple", () => {
        expect(arrStep([1, 2, 3, 4, 5, 6], 2)).toEqual([1, 3, 5]);
        expect(arrStep([1, 2, 3, 4, 5, 6], Infinity)).toEqual([1]);
    });
});
