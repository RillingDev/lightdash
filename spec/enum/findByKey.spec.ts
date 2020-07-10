import { findByKey } from "../../src/enum/findByKey";

describe("findByKey", () => {
    it("retrieves matching for string enums", () => {
        enum MyStringEnum {
            FOO = "Foo",
            BAR = "Bar",
        }
        const value = findByKey<MyStringEnum>(MyStringEnum, "FOO");
        expect(value as string | null).toEqual("Foo");
    });
    it("returns null for no match", () => {
        enum MyStringEnum {
            FOO = "Foo",
            BAR = "Bar",
        }
        const value = findByKey<MyStringEnum>(MyStringEnum, "FIZZ");
        expect(value as string | null).toBeNull();
    });
});
