"use strict";

const {
    arrCloneDeep,
} = require("../dist/lightdash.common");

describe("arrCloneDeep", () => {
    it("Simple", () => {
        const input = [1, 2, [5, 6, [6]]];
        const clone = arrCloneDeep(input);

        clone[0] = "foo";
        clone[2][2][0] = "bar";

        expect(clone[0]).toBe("foo");
        expect(clone[2][2][0]).toBe("bar");

        expect(input[0]).toBe(1);
        expect(input[2][2][0]).toBe(6);
    });
});
