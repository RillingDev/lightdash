import { forEachEntryDeep } from "../../src/for/eachEntryDeep";
import { ITypedObject } from "../../src/obj/lib/ITypedObject";

describe("forEachEntryDeep", () => {
    it("iterates", () => {
        const a: ITypedObject<any> = { a: 1, b: { c: [1, 2] } };

        forEachEntryDeep(a, (key, val, index, obj) => {
            obj[key] = index * val;
        });

        expect(a).toEqual({a: 0, b: {c: [0, 2]}});
    });
});
