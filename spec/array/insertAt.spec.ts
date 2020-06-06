import { insertAt } from "../../src/array/insertAt";

describe("insertAt", () => {
    it("inserts single", () => {
        expect(insertAt(["foo", "fizz"], 1, "bar")).toEqual([
            "foo",
            "bar",
            "fizz",
        ]);
    });

    it("inserts multiple", () => {
        expect(insertAt(["foo", "fizz"], 1, "bar", "bazz")).toEqual([
            "foo",
            "bar",
            "bazz",
            "fizz",
        ]);
    });

    it("appends if higher or equal length", () => {
        expect(insertAt(["foo", "fizz"], 999, "bar")).toEqual([
            "foo",
            "fizz",
            "bar",
        ]);
    });

    it("prepends if less than 0", () => {
        expect(insertAt(["foo", "fizz"], -999, "bar")).toEqual([
            "bar",
            "foo",
            "fizz",
        ]);
    });
});
