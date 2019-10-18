"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binarySearch_1 = require("../../../src/search/binarySearch");
describe("binarySearch", () => {
    it("searches for value", () => {
        expect(binarySearch_1.binarySearch([0, 1, 2], 1)).toBe(1);
    });
    it("returns null for no match", () => {
        expect(binarySearch_1.binarySearch([0, 1, 2], 100)).toBeNull();
    });
});
