const { hasPath } = require("../../dist/lightdash.common");

describe("getPath", () => {
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

        expect(
            hasPath(
                {
                    a: 1
                },
                ["c"]
            )
        ).toBe(false);
        expect(hasPath([4, 6, 8], ["8"])).toBe(false);
        expect(
            hasPath(
                {
                    a: {
                        b: 2,
                        c: [10, 20]
                    }
                },
                ["f", "x", "231", "21"]
            )
        ).toBe(false);
        expect(hasPath(1, ["foo"])).toBe(false);
    });
});
