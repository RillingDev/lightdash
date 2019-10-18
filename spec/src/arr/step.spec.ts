import { arrStep } from "../../../src/arr/step";

describe("arrStep", () => {
    it("steps items", () => {
        expect(arrStep([1, 2, 3, 4, 5, 6], 2)).toEqual([1, 3, 5]);
    });
});
