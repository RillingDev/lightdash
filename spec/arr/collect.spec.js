const { arrCollect } = require("../../dist/lightdash.common");

describe("arrCount", () => {
    it("Empty", () => {
        expect(arrCollect([], () => {})).toEqual(new Map());
    });
    it("Simple", () => {
        expect(arrCollect([1, 2, 3], () => 0)).toEqual(
            new Map([[0, [1, 2, 3]]])
        );
    });
    it("Simple 2", () => {
        expect(arrCollect([1, 2, 3, 4, 5], val => val % 2)).toEqual(
            new Map([[0, [2, 4]], [1, [1, 3, 5]]])
        );
    });
});
