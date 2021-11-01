import { isBlank } from "../../src/lang/isBlank";

describe("isBlank", () => {
	it("true for empty", () => {
		expect(isBlank("")).toBeTrue();
	});
	it("true for blank", () => {
		expect(isBlank("  ")).toBeTrue();
	});
	it("false for with content", () => {
		expect(isBlank(" foo ")).toBeFalse();
	});
});
