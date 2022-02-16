import { isPromise } from "../../src/lang/isPromise.js";

describe("isPromise", () => {
	it("true for promise", () => {
		expect(
			isPromise(
				new Promise((resolve) => {
					resolve("foo");
				})
			)
		).toBe(true);
	});
	it("false for other", () => {
		expect(isPromise(() => "foo")).toBe(false);
		expect(isPromise({})).toBe(false);
		expect(isPromise([])).toBe(false);
		expect(isPromise(null)).toBe(false);
		expect(isPromise(undefined)).toBe(false);
	});
});
