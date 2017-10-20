const {
    arrUniq
} = require("../../dist/lightdash.common");

describe("arrUniq", () => {
    it("Simple", () => {
        expect(arrUniq([1, 1, 1, 2, 3, 1, 2, 1, 4])).toEqual([1, 2, 3, 4]);
    });
});
