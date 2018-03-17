const { objDefaults } = require("../../dist/lightdash.common");

describe("objDefaults", () => {
    it("Empty", () => {
        expect(objDefaults({}, {})).toEqual({});
        expect(objDefaults({ a: 1 }, {})).toEqual({ a: 1 });
        expect(objDefaults({}, { a: 1 })).toEqual({ a: 1 });
    });
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
        expect(objDefaults([34], [0, 1, 2])).toEqual([34, 1, 2]);
    });
});
