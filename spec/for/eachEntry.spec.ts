import { forEachEntry } from "../../src/for/eachEntry";
import { ITypedObject } from "../../src/obj/lib/ITypedObject";

describe("forEachEntry", () => {
    it("iterates", () => {
        const a: ITypedObject<number> = { a: 1, b: 2 };

        forEachEntry(a, (key, val, index) => {
            a[key] = val * index;
        });

        expect(a).toEqual({ a: 0, b: 2 });
    });
});
