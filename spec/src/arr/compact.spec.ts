import { arrCompact } from "../../../src/arr/compact";

describe("arrCompact", () => {
    it("drops falsey", () => {
        expect(
            arrCompact([1, "", "", 2, 3, null, 4, undefined, 5, ""])
        ).toEqual([1, 2, 3, 4, 5]);
    });
});
