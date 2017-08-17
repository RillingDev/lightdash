"use strict";

const {
    arrMapDeep,
} = require("../dist/lightdash.common");

describe("arrMapDeep", () => {
    it("Simple", () => {
        const input = [1, 2, [5, 6, [6]]];
        const mapped = arrMapDeep(input, val => val * 2);

        expect(mapped[0]).toBe(2);
        expect(mapped[2][2][0]).toBe(12);

        expect(input[0]).toBe(1);
        expect(input[2][2][0]).toBe(6);
    });
});
