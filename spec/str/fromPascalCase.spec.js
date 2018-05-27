const { strFromPascalCase } = require("../../dist/lightdash.common");

describe("strFromPascalCase", () => {
    it("Empty", () => {
        expect(strFromPascalCase("")).toEqual([]);
    });
    it("Simple", () => {
        expect(strFromPascalCase("Foo")).toEqual(["Foo"]);
    });
    it("Simple 2", () => {
        expect(strFromPascalCase("FooBar")).toEqual(["Foo", "Bar"]);
    });
    it("Simple 3", () => {
        expect(strFromPascalCase("FizzBuzzBazz")).toEqual([
            "Fizz",
            "Buzz",
            "Bazz"
        ]);
    });
});
