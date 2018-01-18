const { isArray, forEachEntryDeep } = require("../../dist/lightdash.common");

describe("forEachEntryDeep", () => {
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
});
