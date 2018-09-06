import { searchBinary } from "../../src/search/binary";

describe("searchBinary", () => {
    it("searches for value", () => {
        expect(searchBinary([0, 1, 2], 1)).toBe(1);
        expect(searchBinary([0, 1, 2], 100)).toBeNull();
    });
});
