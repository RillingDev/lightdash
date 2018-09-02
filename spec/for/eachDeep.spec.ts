import { forEachDeep } from "../../src/for/eachDeep";

describe("forEachDeep", () => {
    it("iterates", () => {
        const a = [2, 4, [1, 1, [16], 4]];

        forEachDeep(a, (val, index, arr) => {
            arr[index] = index * val;
        });

        expect(a).toEqual([0, 4, [0, 1, [0], 12]]);
    });
});
