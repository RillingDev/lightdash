const { strFromCamelCase } = require("../../dist/lightdash.common");

describe("strFromCamelCase", () => {
    it("Empty", () => {
        expect(strFromCamelCase("")).toEqual([]);
    });
    it("Simple", () => {
        expect(strFromCamelCase("foo")).toEqual(["foo"]);
    });
    it("Simple 2", () => {
        expect(strFromCamelCase("fooBar")).toEqual(["foo", "Bar"]);
    });
    it("Simple 3", () => {
        expect(strFromCamelCase("fizzBuzzBazz")).toEqual([
            "fizz",
            "Buzz",
            "Bazz"
        ]);
    });
});
