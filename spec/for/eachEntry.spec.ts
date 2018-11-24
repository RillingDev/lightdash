import { forEachEntry } from "../../src/for/eachEntry";
import { IAnyObject } from "../../src/obj/lib/IAnyObject";

describe("forEachEntry", () => {
    it("iterates", () => {
        const a: IAnyObject = { a: 1, b: 2 };

        forEachEntry(a, (val, key) => {
            a[key] = val * 2;
        });

        expect(a).toEqual({ a: 2, b: 4 });
    });
});
