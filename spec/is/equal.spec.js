const { isEqual } = require("../../dist/lightdash.common");

describe("isEqual", () => {
    it("Primitives and References", () => {
        const a = [1, 2, 3];
        const b = Symbol();

        expect(isEqual(1, 1.0)).toBe(true);
        expect(isEqual(false, false)).toBe(true);
        expect(isEqual("foo", "foo")).toBe(true);

        expect(isEqual(1, 2)).toBe(false);
        expect(isEqual(false, true)).toBe(false);
        expect(isEqual("foo", "fooo")).toBe(false);

        expect(isEqual(a, a)).toBe(true);
        expect(isEqual(b, b)).toBe(true);
    });

    it("Objects", () => {
        const a1 = [1, 2, 3];
        const a2 = [1, 2, 3];
        const b1 = { a: 1, b: [1, 2, [3, "foo"]] };
        const b2 = { a: 1, b: [1, 2, [3, "foo"]] };
        const b3 = { a: 1, b: [1, 2, [3]] };
        const b4 = { a: 1, b: [1, 2, [3, "foo", []]] };

        expect(isEqual(a1, a2)).toBe(true);
        expect(isEqual(b1, b2)).toBe(true);

        expect(isEqual(b1, b3)).toBe(false);
        expect(isEqual(b1, b4)).toBe(false);
        expect(isEqual(b3, b4)).toBe(false);
    });
});
