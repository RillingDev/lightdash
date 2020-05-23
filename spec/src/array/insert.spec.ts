import { insert } from "../../../src/array/insert";

describe("insert", () => {
    it("inserts single", () => {
        expect(insert(["foo", "fizz"], 1, "bar")).toEqual([
            "foo",
            "bar",
            "fizz",
        ]);
    });

    it("inserts multiple", () => {
        expect(insert(["foo", "fizz"], 1, "bar", "bazz")).toEqual([
            "foo",
            "bar",
            "bazz",
            "fizz",
        ]);
    });

    it("appends if higher or equal length", () => {
        expect(insert(["foo", "fizz"], 999, "bar")).toEqual([
            "foo",
            "fizz",
            "bar",
        ]);
    });

    it("prepends if less than 0", () => {
        expect(insert(["foo", "fizz"], -999, "bar")).toEqual([
            "bar",
            "foo",
            "fizz",
        ]);
    });
});
