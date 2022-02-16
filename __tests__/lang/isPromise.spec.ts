import { isPromise } from "../../src/lang/isPromise.js";

describe("isPromise", () => {
	it("true for promise", () => {
		expect(
			isPromise(
				new Promise((resolve) => {
					resolve("foo");
				})
			)
		).toBeTrue();
	});
	it("false for other", () => {
		expect(isPromise(() => "foo")).toBeFalse();
		expect(isPromise({})).toBeFalse();
		expect(isPromise([])).toBeFalse();
		expect(isPromise(null)).toBeFalse();
		expect(isPromise(undefined)).toBeFalse();
	});
});
