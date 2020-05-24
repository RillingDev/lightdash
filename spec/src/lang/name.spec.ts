import { name } from "../../../src/lang/name";

describe("name", () => {
    it("gets name of class", () => {
        expect(name(class Foo {})).toBe("Foo");
    });
    it("gets name of function", () => {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        expect(name(function bar() {})).toBe("bar");
    });
    it("gets name of symbol", () => {
        expect(name(Symbol("abc"))).toBe("abc");
    });
    it("gets name of string", () => {
        expect(name("foo")).toBe("foo");
    });
    it("gets null for number", () => {
        expect(name(1)).toBe(null);
    });
    it("gets null for null", () => {
        expect(name(null)).toBe(null);
    });
});
