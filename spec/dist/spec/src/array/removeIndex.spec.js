"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removeIndex_1 = require("../../../src/array/removeIndex");
describe("removeIndex", () => {
    it("removes index", () => {
        expect(removeIndex_1.removeIndex(["foo", "bar", "fizz"], 1)).toEqual(["foo", "fizz"]);
    });
});
