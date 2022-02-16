import { isBlank } from "../../src/lang/isBlank.js";

describe("isBlank", () => {
	it("true for empty", () => {
		expect(isBlank("")).toBe(true);
	});
	it("true for blank", () => {
		expect(isBlank("  ")).toBe(true);
	});
	it("false for with content", () => {
		expect(isBlank(" foo ")).toBe(false);
	});
});
