import { arrCollect } from "../../../src/arr/collect";

describe("arrCollect", () => {
    it("returns empty on noop", () => {
        expect(arrCollect([1, 2, 3], () => null)).toEqual(new Map());
    });

    it("collects by value", () => {
        expect(arrCollect([1, 2, 3, 4, 5], val => val % 2)).toEqual(
            new Map([[0, [2, 4]], [1, [1, 3, 5]]])
        );
    });
});
