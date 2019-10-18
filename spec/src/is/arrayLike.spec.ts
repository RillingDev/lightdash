import { isArrayLike } from "../../../src/is/arrayLike";

describe("isArrayLike", () => {
    it("checks if array-like", () => {
        expect(isArrayLike([])).toBeTruthy();
        expect(isArrayLike({ length: 0 })).toBeTruthy();
        expect(isArrayLike({})).toBeFalsy();
    });
});
