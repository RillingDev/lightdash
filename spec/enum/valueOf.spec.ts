import { valueOf } from "../../src/enum/valueOf";

describe("valueOf", () => {
    it("retrieves matching for string enums", () => {
        enum MyStringEnum {
            FOO = "Foo",
            BAR = "Bar",
        }
        const value = valueOf<MyStringEnum>(MyStringEnum, "Foo");
        expect(value as string | null).toEqual("Foo");
    });
    it("retrieves matching for number enums", () => {
        enum MyNumberEnum {
            FOO = 1,
            BAR = 2,
        }
        const value = valueOf<MyNumberEnum>(MyNumberEnum, 2);
        expect(value as number | null).toEqual(2);
    });
    it("retrieves matching for mixed enums", () => {
        enum StringsOnBothSides {
            FOO = "Foo",
            BAR = 2,
        }
        const value = valueOf<StringsOnBothSides>(StringsOnBothSides, "Foo");
        expect(value as string | number | null).toEqual("Foo");
    });
    it("returns null for no match", () => {
        enum MyStringEnum {
            FOO = "Foo",
            BAR = "Bar",
        }
        const value = valueOf<MyStringEnum>(MyStringEnum, "Fizz");
        expect(value as string | null).toBeNull();
    });
    it("throws for duplicate enum values", () => {
        enum MyStringEnum {
            FOO = "Foo",
            FOO_AGAIN = "Foo",
        }
        expect(() => valueOf<MyStringEnum>(MyStringEnum, "Foo")).toThrow(
            new TypeError(
                "Enums where the same value is used for multiple items are not supported!"
            )
        );
    });
});
