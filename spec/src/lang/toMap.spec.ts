import { toMap } from "../../../src/lang/toMap";

describe("toMap", () => {
    it("converts to map", () => {
        expect(toMap({ a: 1, b: 4, c: 5 })).toEqual(
            new Map([
                ["a", 1],
                ["b", 4],
                ["c", 5],
            ])
        );
    });
});
