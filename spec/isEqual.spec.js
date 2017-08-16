"use strict";

const {
    isEqual
} = require("../dist/lightdash.common");

describe("isEqual", () => {
    it("Primitives", () => {
        expect(isEqual(1, 1)).toBe(true);
        expect(isEqual("foo", "foo")).toBe(true);
        expect(isEqual(true, true)).toBe(true);
        expect(isEqual(true, false)).toBe(false);
        expect(isEqual(true, "foo")).toBe(false);
        expect(isEqual(null, null)).toBe(true);
    });

    it("Array", () => {
        expect(isEqual([], [])).toBe(true);
        expect(isEqual([1], [1])).toBe(true);
        expect(isEqual([1, "foo"], [1])).toBe(false);
        expect(isEqual([1, 2, 3, 4, [5, 6, [7, 8], 9]], [1, 2, 3, 4, [5, 6, [7, 8], 9]])).toBe(true);
        expect(isEqual([1, 2, 3, 4, [5, 6, [7, 8], 9]], [1, 2, 3, 4, [5, 6, [7, 8, "foo"], 9]])).toBe(false);
        expect(isEqual([1, 2, 3, 4, [5, 6, [7, 8], 9]], "foo")).toBe(false);
        expect(isEqual([1, 2, 3, 4, [5, 6, [7, 8], 9]], 123)).toBe(false);
        expect(isEqual([1, 2, 3, 4, [5, 6, [7, 8], 9]], false)).toBe(false);
    });

    it("Object", () => {
        expect(isEqual({}, {})).toBe(true);
        expect(isEqual({
            a: 2,
            b: 4
        }, {
            a: 2,
            b: 4
        })).toBe(true);
        expect(isEqual({
            a: 2,
            b: 4
        }, {
            a: 2,
            c: 8
        })).toBe(false);
    });
});
