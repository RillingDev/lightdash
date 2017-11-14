const {
    arrFromDeep
} = require("../../dist/lightdash.common");

describe("arrFromDeep", () => {
    it("Simple", () => {
        const a = [1, 2, 3, [5, [6]]];
        const b = arrFromDeep(a);

        b[3][1][0] = 10;

        expect(a).toEqual([1, 2, 3, [5, [6]]]);
        expect(b).toEqual([1, 2, 3, [5, [10]]]);
    });
});
