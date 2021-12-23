import { pullFirst } from "../../src/array/pullFirst";

describe("pullFirst", () => {
	it("removes the first item", () => {
		const a = ["foo", "bar", "fizz", "bar"];
		expect(pullFirst(a, "bar")).toEqual(["foo", "fizz", "bar"]);
	});
	it("does nothing if value cannot be found", () => {
		const a = ["foo", "bar", "fizz", "bar"];
		expect(pullFirst(a, "bazz")).toEqual(["foo", "bar", "fizz", "bar"]);
	});
});
