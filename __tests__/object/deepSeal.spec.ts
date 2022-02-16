import { deepSeal } from "../../src/object/deepSeal.js";

describe("deepSeal", () => {
	it("seals all", () => {
		const a = { a: { b: 2 }, b: [1, { foo: "foo" }], c: 2 };
		deepSeal(a);

		expect(Object.isSealed(a)).toBe(true);
		expect(Object.isSealed(a.a)).toBe(true);
		expect(Object.isSealed(a.a.b)).toBe(true);
		expect(Object.isSealed(a.b)).toBe(true);
		expect(Object.isSealed(a.b[1])).toBe(true);
	});

	it("works with circular refs", () => {
		const a = { b: null as object | null };
		a.b = { a: a };

		deepSeal(a);

		expect(Object.isSealed(a)).toBe(true);
		expect(Object.isSealed(a.b)).toBe(true);
	});
});
