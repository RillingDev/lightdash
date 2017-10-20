const {
    isObjectLike
} = require("../../dist/lightdash.common");

describe("isObjectLike", () => {
    it("Simple", () => {
        expect(isObjectLike({})).toBe(true);
        expect(isObjectLike([])).toBe(true);

        expect(isObjectLike(null)).toBe(false);
        expect(isObjectLike(1)).toBe(false);
    });
});
