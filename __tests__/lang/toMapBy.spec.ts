import { toMapBy } from "../../src/lang/toMapBy.js";

describe("toMapBy", () => {
	it("maps keys/values", () => {
		const actual = toMapBy(
			{ a: 1, b: 4, c: 5 },
			(key) => {
				return { key };
			},
			(_key, value) => value * 2
		);
		expect(actual).toBeInstanceOf(Map);
		const actualEntries = Array.from(actual.entries());
		expect(actualEntries[0]).toEqual([{ key: "a" }, 2]);
		expect(actualEntries[1]).toEqual([{ key: "b" }, 8]);
		expect(actualEntries[2]).toEqual([{ key: "c" }, 10]);
	});
});
