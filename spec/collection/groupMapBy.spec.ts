import { groupMapBy } from "src/collection/groupMapBy";

describe("groupMapBy", () => {
    it("removes index", () => {
        const actual = groupMapBy(["foo", "bar", "fizz"], str => str.charAt(0));
        expect(actual).toEqual(
            new Map([["f", ["foo", "fizz"]], ["b", ["bar"]]])
        );
    });
});
