import { removeIndex } from "../../../src/array/removeIndex";

describe("removeIndex", () => {
    it("removes index", () => {
        expect(removeIndex(["foo", "bar", "fizz"], 1)).toEqual(["foo", "fizz"]);
    });
});
