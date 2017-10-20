const {
    objCloneDeep
} = require("../../dist/lightdash.common");

describe("objCloneDeep", () => {
    it("Simple", () => {
        const a = {
            a: {
                b: 2,
                c: {
                    a: 10,
                    b: 20
                }
            }
        };
        const b = objCloneDeep(a);

        b.a.c.a = 123;

        expect(a).toEqual({
            a: {
                b: 2,
                c: {
                    a: 10,
                    b: 20
                }
            }
        });
        expect(b).toEqual({
            a: {
                b: 2,
                c: {
                    a: 123,
                    b: 20
                }
            }
        });
    });
});
