import { name } from "../../src/object/name";

describe("name", () => {
    it("gets name", () => {
        expect(name(class Foo {
        })).toBe("Foo");
        // tslint:disable-next-line:no-empty
        expect(name(function bar() {
        })).toBe("bar");
        expect(name(Symbol("abc"))).toBe("abc");
        expect(name("foo")).toBe("foo");
        expect(name(1)).toBe(null);
        expect(name(null)).toBe(null);
    });
});
