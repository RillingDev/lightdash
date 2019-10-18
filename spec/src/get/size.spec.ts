import { getSize } from "../../../src/get/size";

describe("getSize", () => {
    it("gets size", () => {
        expect(getSize([1, 2])).toBe(2);
        expect(getSize({ a: 1 })).toBe(1);
        expect(getSize(new Set())).toBe(0);
        expect(getSize("foo")).toBe(3);
        expect(getSize(1)).toBe(-1);
        expect(getSize(null)).toBe(-1);
    });
});
