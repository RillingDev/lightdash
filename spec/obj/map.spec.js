const { objMap } = require("../../dist/lightdash.common");

describe("objMap", () => {
    it("Simple", () => {
        expect(
            objMap(
                {
                    a: 4,
                    b: 2
                },
                val => val * 2
            )
        ).toEqual({
            a: 8,
            b: 4
        });
    });
});
