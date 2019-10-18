import { forEachEntry } from "../../../src/for/eachEntry";
import { AnyObject } from "../../../src/obj/lib/AnyObject";

describe("forEachEntry", () => {
    it("iterates", () => {
        const a: AnyObject = { a: 1, b: 2 };

        forEachEntry(a, (val, key) => {
            a[key] = val * 2;
        });

        expect(a).toEqual({ a: 2, b: 4 });
    });
});
