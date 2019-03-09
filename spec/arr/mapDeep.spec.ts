import { arrMapDeep } from "../../src/arr/mapDeep";

describe("arrMapDeep", () => {
    it("maps values", () => {
        expect(
            arrMapDeep([2, 4, [1, 1, [16], 4]], (val: number) => val * 2)
        ).toEqual([4, 8, [2, 2, [32], 8]]);
    });
});
