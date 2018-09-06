import { strFromPascalCase } from "../../src/str/fromPascalCase";

describe("strFromPascalCase", () => {
    it("parses PascalCase", () => {
        expect(strFromPascalCase("FooBar")).toEqual(["Foo", "Bar"]);
        expect(strFromPascalCase("FizzBuzzBazz")).toEqual([
            "Fizz",
            "Buzz",
            "Bazz"
        ]);
    });
});
