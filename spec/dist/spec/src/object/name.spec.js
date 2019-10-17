"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name_1 = require("../../../src/object/name");
describe("name", () => {
    it("gets name of class", () => {
        expect(name_1.name(class Foo {
        })).toBe("Foo");
    });
    it("gets name of function", () => {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        expect(name_1.name(function bar() { })).toBe("bar");
    });
    it("gets name of symbol", () => {
        expect(name_1.name(Symbol("abc"))).toBe("abc");
    });
    it("gets name of string", () => {
        expect(name_1.name("foo")).toBe("foo");
    });
    it("gets null for number", () => {
        expect(name_1.name(1)).toBe(null);
    });
    it("gets null for null", () => {
        expect(name_1.name(null)).toBe(null);
    });
});
//# sourceMappingURL=name.spec.js.map