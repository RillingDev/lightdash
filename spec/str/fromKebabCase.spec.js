const { strFromKebabCase } = require("../../dist/lightdash.common");

describe("strToCamelCase", () => {
    it("Empty", () => {
        expect(strFromKebabCase("")).toEqual([]);
    });
    it("Simple", () => {
        expect(strFromKebabCase("foo-bar")).toEqual(["foo", "bar"]);
    });
    it("Simple 2", () => {
        expect(strFromKebabCase("Fizz-buzz-BaZZ")).toEqual([
            "Fizz",
            "buzz",
            "BaZZ"
        ]);
    });
});
