import { isEqual } from "../../src/is/equal";

describe("isEqual", () => {
    it("checks if equal", () => {
        expect(isEqual(1, 1)).toBeTruthy();
        expect(isEqual({}, {})).toBeTruthy();
        expect(isEqual([1, 2], [1, 2])).toBeTruthy();
        expect(isEqual([1, 2, [3, 4]], [1, 2, [3, 4]])).toBeTruthy();
        expect(isEqual([1, 2, 3], [1])).toBeFalsy();
        expect(isEqual([], {})).toBeFalsy();
        expect(isEqual(1, true)).toBeFalsy();
    });
});
