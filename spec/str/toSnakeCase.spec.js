const { strToSnakeCase } = require("../../dist/lightdash.common");

describe("strToCamelCase", () => {
    it("Empty", () => {
        expect(strToSnakeCase([])).toBe("");
    });
    it("Simple", () => {
        expect(strToSnakeCase(["foo", "bar"])).toBe("foo_bar");
    });
    it("Simple 2", () => {
        expect(strToSnakeCase(["Fizz", "buzz", "BaZZ"])).toBe("fizz_buzz_bazz");
    });
});
