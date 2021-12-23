import { step } from "../../src/array/step";

describe("step", () => {
	it("steps items", () => {
		expect(step([1, 2, 3, 4, 5, 6], 2)).toEqual([1, 3, 5]);
	});
});
