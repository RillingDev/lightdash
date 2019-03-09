import { getPath } from "../../src/get/path";

describe("getPath", () => {
    it("gets path", () => {
        expect(getPath({ a: 1 }, ["a"])).toBe(1);
        expect(getPath([4, 6, 8], ["1"])).toBe(6);
        expect(getPath({ a: { b: 2, c: [10, 20] } }, ["a", "c", "0"])).toBe(10);
    });
});
