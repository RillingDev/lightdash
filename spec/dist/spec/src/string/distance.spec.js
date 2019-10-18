"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const distance_1 = require("../../../src/string/distance");
describe("distance", () => {
    it("gets distance", () => {
        expect(distance_1.distance("Kitten", "Sitting")).toBe(3);
        expect(distance_1.distance("String", "Stribng")).toBe(1);
        expect(distance_1.distance("foo", "foo")).toBe(0);
    });
});
