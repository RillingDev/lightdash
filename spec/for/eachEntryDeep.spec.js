const { isArray, forEachEntryDeep } = require("../../dist/lightdash.common");

describe("forEachEntryDeep", () => {
    it("Empty", () => {
        const input = {};
        const result = [];

        forEachEntryDeep(input, (key, val) => {
            result.push(val);
        });

        expect(result).toEqual([]);
    });
    it("Simple", () => {
        const input = {
            a: 2,
            b: 3,
            c: {
                x: [1, 2, 3],
                y: "foo",
                z: {}
            },
            d: {
                v: 1
            }
        };
        const result = [];

        forEachEntryDeep(input, (key, val) => {
            if (!isArray(val)) {
                result.push(val);
            }
        });

        expect(result).toEqual([2, 3, 1, 2, 3, "foo", 1]);
    });
    it("Circular", () => {
        const input = { a: 1 };
        const result = [];

        input.b = input;

        expect(() => {
            forEachEntryDeep(input, val => {
                result.push(val);
            });
        }).toThrowError("Maximum call stack size exceeded");
    });
});
