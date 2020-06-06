import { pullFirst } from "../../src/array/pullFirst";

describe("pullFirst", () => {
    it("removes the first item", () => {
        const a = ["foo", "bar", "fizz", "bar"];
        expect(pullFirst(a, "bar")).toEqual(["foo", "fizz", "bar"]);
    });
});
