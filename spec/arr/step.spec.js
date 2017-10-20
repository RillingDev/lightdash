const {
    arrStep
} = require("../../dist/lightdash.common");

describe("arrStep", () => {
    it("Simple", () => {
        expect(arrStep([1, 2, 3, 4, 5, 6], 2)).toEqual([1, 3, 5]);
    });
});
