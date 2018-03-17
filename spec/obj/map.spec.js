const { objMap } = require("../../dist/lightdash.common");

describe("objMap", () => {
    it("Empty", () => {
        expect(objMap({}, () => 1)).toEqual({});
        expect(objMap([], () => 1)).toEqual({});
    });
    it("Simple", () => {
        expect(
            objMap(
                {
                    a: 4,
                    b: 2
                },
                (key, val) => val * 2
            )
        ).toEqual({
            a: 8,
            b: 4
        });
        expect(objMap([4, 2], (key, val) => val * 2)).toEqual({
            0: 8,
            1: 4
        });
    });
});
