"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decycle_1 = require("../../../src/object/decycle");
describe("decycle", () => {
    it("decycles", () => {
        const a = { a: {}, b: 1, c: 2 };
        a.a = a;
        expect(decycle_1.decycle(a)).toEqual({ a: null, b: 1, c: 2 });
    });
    it("decycles with custom replacer", () => {
        const a = { a: {}, b: 1, c: 2 };
        a.a = a;
        expect(decycle_1.decycle(a, (val, key) => `_${key}`)).toEqual({
            a: "_a",
            b: 1,
            c: 2
        });
    });
});
