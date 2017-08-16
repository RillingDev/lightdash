"use strict";

const {
    isArray,
    isObject,
    forEachEntry,
    forEachEntryDeep,
} = require("../dist/lightdash.common");

describe("forEachEntry", () => {
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

        forEachEntry(input, (val, key, index, arr) => {
            result.push(val);
        });

        expect(result).toEqual([2, 3, 42, 2, 19, {
            v: 1
        }]);
    });
});

describe("forEachEntryDeep", () => {
    it("Simple", () => {
        const input = {
            a: 2,
            b: 3,
            c: {
                x: [1, 2, 3],
                y: "foo",
                z: Object
            },
            d: {
                v: 1
            }
        };
        const result = [];

        forEachEntryDeep(input, (val, index, arr) => {
            if (!isArray(val) && !isObject(val)) {
                result.push(val);
            }
        });

        expect(result).toEqual([2, 3, 1, 2, 3, "foo", 1]);
    });
});
