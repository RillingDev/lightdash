import { getExistingElseThrow } from "../../src/map/getExistingElseThrow.js";

describe("getExistingElseThrow", () => {
	it("returns value if key exists", () => {
		expect(getExistingElseThrow(new Map([["key", 1]]), "key")).toBe(1);
	});
	it("throws map does not contain key", () => {
		expect(() =>
			getExistingElseThrow(new Map([["key", 1]]), "foo"),
		).toThrowError(
			new TypeError("Could not find key 'foo' in map keys '[\"key\"]'."),
		);
	});
});
