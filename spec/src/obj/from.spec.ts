import { objFrom } from "../../../src/obj/from";

describe("objFrom", () => {
    it("copies obj", () => {
        const a = { a: 4, b: 2 };
        const b = objFrom(a);

        b.a = 10;

        expect(a).toEqual({ a: 4, b: 2 });
        expect(b).toEqual({ a: 10, b: 2 });
    });
});
