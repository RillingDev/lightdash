import { objFromDeep } from "../../../src/obj/fromDeep";

describe("objFromDeep", () => {
    it("copies obj deep", () => {
        const a = { a: { b: 2, c: { a: 10, b: 20 } } };
        const b = objFromDeep(a);

        b.a.c.a = 123;

        expect(a).toEqual({ a: { b: 2, c: { a: 10, b: 20 } } });
        expect(b).toEqual({ a: { b: 2, c: { a: 123, b: 20 } } });
    });
});
