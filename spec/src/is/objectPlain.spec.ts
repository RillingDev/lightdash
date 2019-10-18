import { isObjectPlain } from "../../../src/is/objectPlain";

describe("isObjectPlain", () => {
    it("checks if plain object", () => {
        expect(isObjectPlain({})).toBeTruthy();
        expect(isObjectPlain([])).toBeFalsy();
        expect(isObjectPlain(() => 1)).toBeFalsy();
        expect(isObjectPlain(1)).toBeFalsy();
    });
});
