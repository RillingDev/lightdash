import { matchAll } from "../../src/string/matchAll";

describe("matchAll", () => {
    it("matches all", () => {
        const actual = matchAll("Kitten", /t/g);
        expect(actual.length).toBe(2);
        expect(actual[0].toString()).toBe("t");
        expect(actual[1].toString()).toBe("t");
    });
});
