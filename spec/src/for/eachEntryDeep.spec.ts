import { forEachEntryDeep } from "../../../src/for/eachEntryDeep";
import { AnyObject } from "../../../src/obj/lib/AnyObject";

describe("forEachEntryDeep", () => {
    it("iterates", () => {
        const a: AnyObject = { a: 1, b: { c: [1, 2] } };

        forEachEntryDeep(a, (val, key, obj) => {
            obj[key] = val * 2;
        });

        expect(a).toEqual({ a: 2, b: { c: [2, 4] } });
    });
});
