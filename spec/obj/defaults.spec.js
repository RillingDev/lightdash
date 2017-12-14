const { objDefaults } = require("../../dist/lightdash.common");

describe("objDefaults", () => {
    it("Simple", () => {
        expect(
            objDefaults(
                {
                    a: 1,
                    c: 5
                },
                {
                    a: 1,
                    b: 2,
                    c: 3
                }
            )
        ).toEqual({
            a: 1,
            b: 2,
            c: 5
        });
    });
});
