"use strict";

const {
    forEachEntry,
} = require("../../dist/lightdash.common");

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
