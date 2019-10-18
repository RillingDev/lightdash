import { isArrayBuffer } from "../../../src/is/arrayBuffer";

describe("isArrayBuffer", () => {
    it("checks if ArrayBuffer", () => {
        expect(isArrayBuffer(new ArrayBuffer(8))).toBeTruthy();
        expect(isArrayBuffer([1, 2])).toBeFalsy();
    });
});
