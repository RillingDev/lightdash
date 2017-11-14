"use strict";

const {
    isEmpty
} = require("../../dist/lightdash.common");

describe("isEmpty", () => {
    it("Simple", () => {
        expect(isEmpty("")).toBe(true);
        expect(isEmpty([])).toBe(true);
        expect(isEmpty({})).toBe(true);
        expect(isEmpty(2)).toBe(true);
        expect(isEmpty("foo")).toBe(true);

        expect(isEmpty([1, 2, 3])).toBe(false);
        expect(isEmpty({
            a: 1,
            b: 2
        })).toBe(false);
    });
});
