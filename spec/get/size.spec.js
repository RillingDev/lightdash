const { getSize } = require("../../dist/lightdash.common");

describe("getSize", () => {
    it("Main", () => {
        expect(getSize("foo")).toEqual(3);
        expect(getSize([1, 2])).toEqual(2);
        expect(getSize({ a: 1 })).toEqual(1);
        expect(getSize(new Set())).toEqual(0);
    });
    it("No Size", () => {
        expect(getSize(1, ["0", "foo"])).toEqual(-1);
        expect(getSize(null, ["a", "foo"])).toEqual(-1);
    });
});
