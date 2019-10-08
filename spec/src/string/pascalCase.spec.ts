import { pascalCase } from "../../../src/string/pascalCase";

describe("strToPascalCase", () => {
    it("converts to PascalCase", () => {
        expect(pascalCase("fooBar")).toBe("FooBar");
        expect(pascalCase("__fizz_buzz__")).toBe("FizzBuzz");
    });
});
