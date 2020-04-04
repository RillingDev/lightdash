"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removeItem_1 = require("../../../src/array/removeItem");
describe("removeItem", () => {
    it("removes all items", () => {
        expect(removeItem_1.removeItem(["foo", "bar", "fizz", "bar"], "bar")).toEqual([
            "foo",
            "fizz",
        ]);
    });
    it("removes the first item", () => {
        expect(removeItem_1.removeItem(["foo", "bar", "fizz", "bar"], "bar", false)).toEqual(["foo", "fizz", "bar"]);
    });
});
