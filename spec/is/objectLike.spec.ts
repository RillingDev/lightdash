import { isObjectLike } from "../../src/is/objectLike";

describe("isObjectLike", () => {
    it("checks if object-like", () => {
        expect(isObjectLike({})).toBeTruthy();
        expect(isObjectLike([])).toBeTruthy();
        expect(isObjectLike(() => 1)).toBeFalsy();
        expect(isObjectLike(1)).toBeFalsy();
    });
});
