import { arrUniq } from "../../src/arr/uniq";

describe("arrUniq", () => {
    it("returns unique items", () => {
        expect(
            arrUniq([1, 1, 1, 2, 3, 1, 2, 1, 4])
        ).toEqual([1, 2, 3, 4]);
    });
});
