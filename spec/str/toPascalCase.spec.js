const { strToPascalCase } = require("../../dist/lightdash.common");

describe("strToPascalCase", () => {
    it("Empty", () => {
        expect(strToPascalCase([])).toBe("");
    });
    it("Simple", () => {
        expect(strToPascalCase(["foo", "bar"])).toBe("FooBar");
    });
    it("Simple 2", () => {
        expect(strToPascalCase(["Fizz", "buzz", "BaZZ"])).toBe("FizzBuzzBazz");
    });
});
