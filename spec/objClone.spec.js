"use strict";

const {
    objCloneDeep,
} = require("../dist/lightdash.common");

describe("objCloneDeep", () => {
    it("Simple", () => {
        const input = {
            a: 1,
            b: 2,
            c: [1, 2, 3],
            d: {
                f: 1
            }
        };
        const clone = objCloneDeep(input);

        clone.a = "foo";
        clone.c[0] = "bar";
        clone.d.f = "fizz";

        expect(clone.a).toBe("foo");
        expect(clone.c[0]).toBe("bar");
        expect(clone.d.f).toBe("fizz");

        expect(input.a).toBe(1);
        expect(input.c[0]).toBe(1);
        expect(input.d.f).toBe(1);
    });
});
