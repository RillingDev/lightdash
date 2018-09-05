import { isIndex } from "../../src/is/_index";

describe("isIndex", () => {
    it("checks if valid index", () => {
        expect(isIndex(0)).toBeTruthy();
        expect(isIndex(123)).toBeTruthy();
        expect(isIndex(0.43)).toBeFalsy();
        expect(isIndex(-4)).toBeFalsy();
        expect(isIndex(Infinity)).toBeFalsy();
    });
});
