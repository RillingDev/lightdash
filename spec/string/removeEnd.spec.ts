import { removeEnd } from "../../src/string/removeEnd";

describe("removeEnd", () => {
	it("removes from end", () => {
		expect(removeEnd("FooBar", "Bar")).toBe("Foo");
	});
	it("keeps input if matches in other position", () => {
		expect(removeEnd("FooBar", "Foo")).toBe("FooBar");
	});
	it("keeps input if nothing matches", () => {
		expect(removeEnd("FooBar", "Buzz")).toBe("FooBar");
	});
});
