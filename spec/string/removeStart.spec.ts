import { removeStart } from "../../src/string/removeStart";

describe("removeStart", () => {
    it("removes from start", () => {
        expect(removeStart("FooBar", "Foo")).toBe("Bar");
    });
    it("keeps input if matches in other position", () => {
        expect(removeStart("FooBar", "Bar")).toBe("FooBar");
    });
    it("keeps input if nothing matches", () => {
        expect(removeStart("FooBar", "Buzz")).toBe("FooBar");
    });
});
