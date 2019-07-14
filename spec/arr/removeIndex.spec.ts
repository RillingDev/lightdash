import { removeIndex } from "../../src/arr/removeIndex";

describe("removeIndex", () => {
    it("removes index", () => {
        expect(removeIndex(["foo", "bar", "fizz"], 1)).toEqual(["foo", "fizz"]);
    });
});
