const { strFromSnakeCase } = require("../../dist/lightdash.common");

describe("strFromSnakeCase", () => {
    it("Empty", () => {
        expect(strFromSnakeCase("")).toEqual([]);
    });
    it("Simple", () => {
        expect(strFromSnakeCase("foo_bar")).toEqual(["foo", "bar"]);
    });
    it("Simple 2", () => {
        expect(strFromSnakeCase("Fizz_buzz_BaZZ")).toEqual([
            "Fizz",
            "buzz",
            "BaZZ"
        ]);
    });
});
