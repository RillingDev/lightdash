import { strToPascalCase } from "../../src/str/toPascalCase";

describe("strToPascalCase", () => {
    it("converts to PascalCase", () => {
        expect(strToPascalCase(["foo", "bar"])).toBe("FooBar");
        expect(strToPascalCase(["Fizz", "buzz", "BaZZ"])).toBe("FizzBuzzBazz");
    });
});
