const { strToCamelCase } = require("../../dist/lightdash.common");

describe("strToCamelCase", () => {
    it("Empty", () => {
        expect(strToCamelCase([])).toBe("");
    });
    it("Simple", () => {
        expect(strToCamelCase(["foo", "bar"])).toBe("fooBar");
    });
    it("Simple 2", () => {
        expect(strToCamelCase(["Fizz", "buzz", "BaZZ"])).toBe("fizzBuzzBazz");
    });
});
