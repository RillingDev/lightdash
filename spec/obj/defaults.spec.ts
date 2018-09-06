import { objDefaults } from "../../src/obj/defaults";

describe("objDefaults", () => {
    it("defaults", () => {
        expect(
            objDefaults({ a: 1, c: 5 }, { a: 1, b: 2, c: 3 })
        ).toEqual({ a: 1, b: 2, c: 5 });
    });
});
