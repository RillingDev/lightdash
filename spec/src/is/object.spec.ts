import { isObject } from "../../../src/is/object";

describe("isObject", () => {
    it("checks if object", () => {
        expect(isObject({})).toBeTruthy();
        expect(isObject([])).toBeTruthy();
        expect(isObject(() => 1)).toBeTruthy();
        expect(isObject(1)).toBeFalsy();
    });
});
