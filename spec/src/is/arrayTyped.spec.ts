import { isArrayTyped } from "../../../src/is/arrayTyped";

describe("isArrayTyped", () => {
    it("checks if typed array", () => {
        expect(isArrayTyped(new Int16Array())).toBeTruthy();
        expect(isArrayTyped(new Uint8Array())).toBeTruthy();
        expect(isArrayTyped([])).toBeFalsy();
    });
});
