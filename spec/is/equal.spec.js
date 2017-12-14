const { isEqual } = require("../../dist/lightdash.common");

describe("isEqual", () => {
    it("Simple", () => {
        expect(isEqual(1, 1)).toBe(true);
        expect(isEqual({}, {})).toBe(true);
        expect(isEqual([1, 2], [1, 2])).toBe(true);
        expect(isEqual([1, 2, [3, 4]], [1, 2, [3, 4]])).toBe(true);

        expect(isEqual([1, 2, 3], [1])).toBe(false);
        expect(isEqual([1, 2, [3]], [1, 2, [4]])).toBe(false);
    });
});
