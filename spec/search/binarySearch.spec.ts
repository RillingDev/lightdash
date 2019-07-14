import { binarySearch } from "../../src/search/binarySearch";

describe("binarySearch", () => {
    it("searches for value", () => {
        expect(binarySearch([0, 1, 2], 1)).toBe(1);
        expect(binarySearch([0, 1, 2], 100)).toBeNull();
    });
});
