const { isArrayLike } = require("../../dist/lightdash.common");

describe("isArrayLike", () => {
    it("Simple", () => {
        expect(isArrayLike([])).toBe(true);
        expect(
            isArrayLike({
                length: 0
            })
        ).toBe(true);

        expect(isArrayLike({})).toBe(false);
        expect(isArrayLike(null)).toBe(false);
        expect(isArrayLike("foo")).toBe(false);
        expect(isArrayLike(1)).toBe(false);
    });
});
