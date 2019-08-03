import { binarySearch } from "../../src/search/binarySearch";

describe("binarySearch", () => {
    it("searches for value", () => {
        expect(binarySearch([0, 1, 2], 1)).toBe(1);
    });
    it("returns null for no match", () => {
        expect(binarySearch([0, 1, 2], 100)).toBeNull();
    });
});
