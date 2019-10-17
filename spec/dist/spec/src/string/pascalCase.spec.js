"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pascalCase_1 = require("../../../src/string/pascalCase");
describe("strToPascalCase", () => {
    it("converts to PascalCase", () => {
        expect(pascalCase_1.pascalCase("fooBar")).toBe("FooBar");
        expect(pascalCase_1.pascalCase("__fizz_buzz__")).toBe("FizzBuzz");
    });
});
//# sourceMappingURL=pascalCase.spec.js.map