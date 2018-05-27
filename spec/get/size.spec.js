const { getSize } = require("../../dist/lightdash.common");

describe("getSize", () => {
    it("Main", () => {
        expect(getSize("foo")).toBe(3);
        expect(getSize([1, 2])).toBe(2);
        expect(getSize({ a: 1 })).toBe(1);
        expect(getSize(new Set())).toBe(0);
    });
    it("No Size", () => {
        expect(getSize(1, ["0", "foo"])).toBe(-1);
        expect(getSize(null, ["a", "foo"])).toBe(-1);
    });
});
