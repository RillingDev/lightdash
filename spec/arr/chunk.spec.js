const { arrChunk } = require("../../dist/lightdash.common");

describe("arrChunk", () => {
    it("Empty", () => {
        expect(arrChunk([], 1)).toEqual([]);
    });
    it("Single", () => {
        expect(arrChunk([1], 1)).toEqual([[1]]);
    });
    it("Larger step", () => {
        expect(arrChunk([1], 3)).toEqual([[1]]);
    });
    it("Empty step", () => {
        expect(arrChunk([1], 0)).toEqual([]);
    });
    it("Invalid step", () => {
        expect(arrChunk([1, 2, 3], -3)).toEqual([]);
        expect(arrChunk([1, 2, 3], 1.1)).toEqual([]);
        expect(arrChunk([1, 2, 3], Infinity)).toEqual([]);
        expect(arrChunk([1, 2, 3], "foo")).toEqual([]);
    });
    it("Simple", () => {
        expect(arrChunk([1, 2, 3, 4, 5, 6], 2)).toEqual([
            [1, 2],
            [3, 4],
            [5, 6]
        ]);
    });
    it("Simple unbalanced", () => {
        expect(arrChunk([1, 2, 3, 4, 5, 6], 4)).toEqual([[1, 2, 3, 4], [5, 6]]);
    });
});
