const {
    arrCloneDeep
} = require("../../dist/lightdash.common");

describe("arrCloneDeep", () => {
    it("Simple", () => {
        const a = [1, 2, 3, [5, [6]]];
        const b = arrCloneDeep(a);

        b[3][1][0] = 10;

        expect(a).toEqual([1, 2, 3, [5, [6]]]);
        expect(b).toEqual([1, 2, 3, [5, [10]]]);
    });
});
