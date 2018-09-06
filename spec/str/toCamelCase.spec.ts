import { strToCamelCase } from "../../src/str/toCamelCase";

describe("strToCamelCase", () => {
    it("converts to camelCase", () => {
        expect(strToCamelCase(["foo", "bar"])).toBe("fooBar");
        expect(strToCamelCase(["Fizz", "buzz", "BaZZ"])).toBe("fizzBuzzBazz");
    });
});
