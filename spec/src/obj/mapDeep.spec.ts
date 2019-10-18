import { objMapDeep } from "../../../src/obj/mapDeep";

describe("objMapDeep", () => {
    it("maps obj deep", () => {
        expect(
            objMapDeep({ a: { b: 2, c: [10, 20] } }, val => val * 2)
        ).toEqual({ a: { b: 4, c: [20, 40] } });
    });
});
