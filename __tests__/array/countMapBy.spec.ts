import { countMapBy } from "../../src/array/countMapBy.js";

describe("countMapBy", () => {
	it("counts items", () => {
		expect(countMapBy([1, 2, 4, 2, 4, 4], (val) => val)).toEqual(
			new Map([
				[1, 1],
				[2, 2],
				[4, 3],
			])
		);
	});
});
