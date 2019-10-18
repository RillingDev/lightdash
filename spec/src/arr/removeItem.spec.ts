import { arrRemoveItem } from "../../../src/arr/removeItem";

describe("arrRemoveItem", () => {
    it("removes all items", () => {
        expect(arrRemoveItem(["foo", "bar", "fizz", "bar"], "bar")).toEqual([
            "foo",
            "fizz"
        ]);
    });
    it("removes one item", () => {
        expect(
            arrRemoveItem(["foo", "bar", "fizz", "bar"], "bar", false)
        ).toEqual(["foo", "fizz", "bar"]);
    });
});
