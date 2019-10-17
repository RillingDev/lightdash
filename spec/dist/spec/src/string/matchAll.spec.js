"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const matchAll_1 = require("../../../src/string/matchAll");
describe("matchAll", () => {
    it("matches all", () => {
        const actual = matchAll_1.matchAll("Kitten", /t/g);
        expect(actual.length).toBe(2);
        expect(actual[0].toString()).toBe("t");
        expect(actual[1].toString()).toBe("t");
    });
});
//# sourceMappingURL=matchAll.spec.js.map