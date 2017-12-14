const { isPrimitive } = require("../../dist/lightdash.common");

describe("isPrimitive", () => {
    it("Simple", () => {
        expect(isPrimitive(1)).toBe(true);
        expect(isPrimitive(null)).toBe(true);

        expect(isPrimitive({})).toBe(false);
        expect(isPrimitive([])).toBe(false);
    });
});
