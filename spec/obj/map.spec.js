"use strict";

const {
    objMapDeep,
} = require("../../dist/lightdash.common");

describe("objMapDeep", () => {
    it("Simple", () => {
        const input = {
            a: 1,
            b: 2,
            c: [1, 2, 3],
            d: {
                f: 1
            }
        };
        const mapped = objMapDeep(input, val => val * 2);

        expect(mapped.a).toBe(2);
        expect(mapped.c[0]).toBe(2);
        expect(mapped.d.f).toBe(2);

        expect(input.a).toBe(1);
        expect(input.c[0]).toBe(1);
        expect(input.d.f).toBe(1);
    });
});
