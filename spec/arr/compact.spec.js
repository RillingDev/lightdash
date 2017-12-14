const { arrCompact } = require("../../dist/lightdash.common");

describe("arrCompact", () => {
    it("Simple", () => {
        expect(
            arrCompact([1, "", "", 2, 3, null, 4, undefined, 5, ""])
        ).toEqual([1, 2, 3, 4, 5]);
    });
});
