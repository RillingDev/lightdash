import { objDecycle } from "../../src/obj/decycle";

describe("objDecycle", () => {
    it("decycles", () => {
        const a = { a: {}, b: 1, c: 2 };

        a.a = a;

        expect(objDecycle(a)).toEqual({ a: null, b: 1, c: 2 });
        expect(objDecycle(a, (val, key) => `_${key}`)).toEqual({
            a: "_a",
            b: 1,
            c: 2
        });
    });
});
