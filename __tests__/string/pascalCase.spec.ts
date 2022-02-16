import { pascalCase } from "../../src/string/pascalCase.js";

describe("pascalCase", () => {
	it("converts to PascalCase", () => {
		expect(pascalCase("fooBar")).toBe("FooBar");
		expect(pascalCase("fizz-buzz_bazz")).toBe("FizzBuzzBazz");
	});
});
