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

    it("maps keys/values", () => {
        const actual = toMap(
            { a: 1, b: 4, c: 5 },
            (key) => {
                return { key };
            },
            (value) => value * 2
        );
        expect(actual).toBeInstanceOf(Map);
        const actualEntries = Array.from(actual.entries());
        expect(actualEntries[0]).toEqual([{ key: "a" }, 2]);
        expect(actualEntries[1]).toEqual([{ key: "b" }, 8]);
        expect(actualEntries[2]).toEqual([{ key: "c" }, 10]);
    });
});
