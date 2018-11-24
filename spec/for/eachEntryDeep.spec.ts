import { forEachEntryDeep } from "../../src/for/eachEntryDeep";
import { IAnyObject } from "../../src/obj/lib/IAnyObject";

describe("forEachEntryDeep", () => {
    it("iterates", () => {
        const a: IAnyObject = { a: 1, b: { c: [1, 2] } };

        forEachEntryDeep(a, (val, key, obj) => {
            obj[key] = val * 2;
        });

        expect(a).toEqual({ a: 2, b: { c: [2, 4] } });
    });
});
