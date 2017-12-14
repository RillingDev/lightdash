const { objFromDeep } = require("../../dist/lightdash.common");

describe("objFromDeep", () => {
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
        const b = objFromDeep(a);

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
