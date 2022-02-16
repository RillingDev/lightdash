import { deepFreeze } from "../../src/object/deepFreeze.js";

describe("deepFreeze", () => {
	it("seals all", () => {
		const a = { a: { b: 2 }, b: [1, { foo: "foo" }], c: 2 };
		deepFreeze(a);

		expect(Object.isFrozen(a)).toBe(true);
		expect(Object.isFrozen(a.a)).toBe(true);
		expect(Object.isFrozen(a.a.b)).toBe(true);
		expect(Object.isFrozen(a.b)).toBe(true);
		expect(Object.isFrozen(a.b[1])).toBe(true);
	});

	it("works with circular refs", () => {
		const a = { b: null as object | null };
		a.b = { a: a };

		deepFreeze(a);

		expect(Object.isFrozen(a)).toBe(true);
		expect(Object.isFrozen(a.b)).toBe(true);
	});
});
