const { strToKebabCase } = require("../../dist/lightdash.common");

describe("strToCamelCase", () => {
    it("Empty", () => {
        expect(strToKebabCase([])).toBe("");
    });
    it("Simple", () => {
        expect(strToKebabCase(["foo", "bar"])).toBe("foo-bar");
    });
    it("Simple 2", () => {
        expect(strToKebabCase(["Fizz", "buzz", "BaZZ"])).toBe("fizz-buzz-bazz");
    });
});
