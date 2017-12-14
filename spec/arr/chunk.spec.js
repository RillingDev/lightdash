const { arrChunk } = require("../../dist/lightdash.common");

describe("arrChunk", () => {
    it("Simple", () => {
        expect(arrChunk([1, 2, 3, 4, 5, 6], 2)).toEqual([
            [1, 2],
            [3, 4],
            [5, 6]
        ]);
        expect(arrChunk([1, 2, 3, 4, 5, 6], 2)).toEqual([
            [1, 2],
            [3, 4],
            [5, 6]
        ]);
    });
});
