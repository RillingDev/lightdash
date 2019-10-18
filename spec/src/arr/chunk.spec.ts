import { arrChunk } from "../../../src/arr/chunk";

describe("arrChunk", () => {
    it("returns empty on zero", () => {
        expect(arrChunk([1, 2, 3], 0)).toEqual([]);
    });

    it("returns full on larger", () => {
        const arr = [1, 2, 3];
        expect(arrChunk(arr, 999)).toEqual([arr]);
    });

    it("returns chunked", () => {
        expect(arrChunk([1, 2, 3, 4, 5, 6], 2)).toEqual([
            [1, 2],
            [3, 4],
            [5, 6]
        ]);
    });

    it("returns chunked uneven", () => {
        expect(arrChunk([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
    });
});
