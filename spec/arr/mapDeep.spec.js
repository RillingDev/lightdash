const { arrMapDeep } = require("../../dist/lightdash.common");

describe("arrMapDeep", () => {
    it("Simple", () => {
        expect(arrMapDeep([2, 4, [1, 1, [16], 4]], val => val * 2)).toEqual([
            4,
            8,
            [2, 2, [32], 8]
        ]);
    });
});
