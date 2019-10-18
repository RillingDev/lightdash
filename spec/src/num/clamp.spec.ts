import { numClamp } from "../../../src/num/clamp";

describe("numClamp", () => {
    it("clamps value", () => {
        expect(numClamp(5, 0, 10)).toBe(5);
        expect(numClamp(-2, 0, 10)).toBe(0);
        expect(numClamp(99, 0, 10)).toBe(10);
    });
});
