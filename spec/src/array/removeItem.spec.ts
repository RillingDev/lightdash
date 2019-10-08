import { removeItem } from "../../../src/array/removeItem";

describe("removeItem", () => {
    it("removes all items", () => {
        expect(removeItem(["foo", "bar", "fizz", "bar"], "bar")).toEqual([
            "foo",
            "fizz"
        ]);
    });
    it("removes the first item", () => {
        expect(removeItem(["foo", "bar", "fizz", "bar"], "bar", false)).toEqual(
            ["foo", "fizz", "bar"]
        );
    });
});
