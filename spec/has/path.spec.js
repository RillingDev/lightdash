const { hasPath } = require("../../dist/lightdash.common");

describe("hasPath", () => {
    it("Empty", () => {
        expect(hasPath([], [])).toBe(true);
        expect(hasPath({}, [])).toBe(true);
    });
    it("Simple", () => {
        expect(
            hasPath(
                {
                    a: 1
                },
                ["a"]
            )
        ).toBe(true);
        expect(hasPath([4, 6, 8], ["1"])).toBe(true);
        expect(
            hasPath(
                {
                    a: {
                        b: 2,
                        c: [10, 20]
                    }
                },
                ["a", "c", "0"]
            )
        ).toBe(true);
    });
    it("Nonexistent", () => {
        expect(hasPath([1, 2, 3], ["0", "foo"])).toBe(false);
        expect(hasPath({ a: 1, b: 2 }, ["a", "foo"])).toBe(false);
        expect(hasPath({ a: 1, b: 2 }, ["a", "foo", "bar", "bizz"])).toBe(
            false
        );
    });
});
