import { arrRemoveIndex } from "../../src/arr/removeIndex";

describe("arrRemoveIndex", () => {
    it("removes index", () => {
        expect(
            arrRemoveIndex(["foo", "bar", "fizz"], 1)
        ).toEqual(["foo", "fizz"]);
    });
});
