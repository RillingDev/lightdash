import { objDefaultsDeep } from "../../src/obj/defaultsDeep";

describe("objDefaultsDeep", () => {
    it("defaults deep", () => {
        expect(
            objDefaultsDeep(
                {
                    a: [1, 2],
                    c: { f: "x" }
                },
                {
                    a: [1, 2, 3],
                    b: 2,
                    c: { f: "y" }
                }
            )
        ).toEqual({
            a: [1, 2, 3],
            b: 2,
            c: { f: "x" }
        });
    });
});
