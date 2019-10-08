"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const groupMapBy_1 = require("../../../src/array/groupMapBy");
describe("groupMapBy", () => {
    it("groups items", () => {
        expect(groupMapBy_1.groupMapBy([1, 2, 3, 4, 5], val => val % 2)).toEqual(new Map([[0, [2, 4]], [1, [1, 3, 5]]]));
    });
});
