const { forEachEntry } = require("../../dist/lightdash.common");

describe("forEachEntry", () => {
    it("Empty", () => {
        const input = {};
        const result = [];

        forEachEntry(input, (key, val) => {
            result.push(val);
        });

        expect(result).toEqual([]);
    });
    it("Simple", () => {
        const input = {
            a: 2,
            b: 3,
            c: 42,
            d: 2,
            e: 19,
            f: {
                v: 1
            }
        };
        const result = [];

        forEachEntry(input, (key, val) => {
            result.push(val);
        });

        expect(result).toEqual([
            2,
            3,
            42,
            2,
            19,
            {
                v: 1
            }
        ]);
    });
    it("Circular", () => {
        const input = { a: 1 };
        const result = [];

        input.b = input;

        forEachEntry(input, (key, val) => {
            result.push(val);
        });

        expect(result).toEqual([1, input]);
    });
});
