import { arrFromDeep } from "../../src/arr/fromDeep";

describe("arrFromDeep", () => {
    it("copies", () => {
        const a = [1, 2, 3, [5, [6]]];
        const b = arrFromDeep(a);

        // @ts-ignore
        b[3][1][0] = 10;

        expect(
            a
        ).toEqual([1, 2, 3, [5, [6]]]);
        expect(
            b
        ).toEqual([1, 2, 3, [5, [10]]]);
    });
});
