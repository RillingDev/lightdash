const {
    objDefaultsDeep
} = require("../../dist/lightdash.common");

describe("objDefaultsDeep", () => {
    /*     it("Simple", () => {
            expect(
                objDefaultsDeep({
                    a: 1,
                    c: 5
                }, {
                    a: 1,
                    b: 2,
                    c: 3
                })
            ).toEqual({
                a: 1,
                b: 2,
                c: 5
            });
        });
     */
    /*     it("Array 1", () => {
            expect(
                objDefaultsDeep({
                    a: 1,
                    c: 5,
                }, {
                    a: 1,
                    b: 2,
                    c: 3,
                    d: [1, 2, 3]
                })
            ).toEqual({
                a: 1,
                b: 2,
                c: 5,
                d: [1, 2, 3]
            });
        }); */

    it("Array 2", () => {
        expect(
            objDefaultsDeep({
                a: 1,
                c: 5,
                d: [1, 2],
                e: {
                    a: 1
                }
            }, {
                a: 1,
                b: 2,
                c: 3,
                d: [1, 2, 3],
                e: {
                    a: 6
                }
            })
        ).toEqual({
            a: 1,
            b: 2,
            c: 5,
            d: [1, 2, 3],
            e: {
                a: 1
            },
        });
    });
});
