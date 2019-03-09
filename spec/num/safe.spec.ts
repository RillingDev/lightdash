import { numSafe } from "../../src/num/safe";

describe("numClamp", () => {
    it("clamps value in safe range", () => {
        expect(numSafe(99999999999999999)).toBe(Number.MAX_SAFE_INTEGER);
        expect(numSafe(-Infinity)).toBe(Number.MIN_SAFE_INTEGER);
    });
});
