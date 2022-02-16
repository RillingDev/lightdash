import { requireNonNilElseThrow } from "../../src/lang/requireNonNilElseThrow.js";

describe("requireNonNilElseThrow", () => {
	it("returns value if non-nil", () => {
		expect(requireNonNilElseThrow("foo", () => new TypeError())).toBe(
			"foo"
		);
	});
	it("throws if nil", () => {
		const typeError = new TypeError();
		expect(() => {
			return requireNonNilElseThrow(null, () => typeError);
		}).toThrow(typeError);
	});
});
