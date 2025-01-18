import { name } from "../../src/lang/name.js";

describe("name", () => {
	it("gets name of class", () => {
		expect(name(class Foo {})).toBe("Foo");
	});
	it("gets name of function", () => {
		expect(name(function bar() {})).toBe("bar");
	});
	it("gets key of symbol", () => {
		expect(name(Symbol.for("abc"))).toBe("abc");
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
