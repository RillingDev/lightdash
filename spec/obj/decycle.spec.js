const { objDecycle } = require("../../dist/lightdash.common");

describe("objDecycle", () => {
    it("Empty", () => {
        expect(objDecycle({})).toEqual({});
    });
    it("No circular", () => {
        const a = { a: 5, b: 1, c: 2 };

        expect(objDecycle(a)).toEqual({
            a: 5,
            b: 1,
            c: 2
        });
    });
    it("Simple", () => {
        const a = { a: 5, b: 1, c: 2 };

        a.a = a;

        expect(objDecycle(a)).toEqual({
            a: null,
            b: 1,
            c: 2
        });
    });
    it("Nested", () => {
        const a = { a: 5, b: 1, c: 2 };

        a.a = a;
        a.a.a = a;
        a.c = a.a.a;

        expect(objDecycle(a)).toEqual({
            a: null,
            b: 1,
            c: null
        });
    });
    it("Custom replacer", () => {
        const a = { a: 5, b: 1, c: 2 };

        a.a = a;

        expect(objDecycle(a, () => 10)).toEqual({
            a: 10,
            b: 1,
            c: 2
        });
        expect(objDecycle(a, key => `_${key}`)).toEqual({
            a: "_a",
            b: 1,
            c: 2
        });
    });
    it("Pre-filled references", () => {
        const a = { a: 5, b: { d: 2 }, c: 2 };

        a.a = a;

        expect(objDecycle(a, () => null, new WeakSet([a.b]))).toEqual({
            a: null,
            b: null,
            c: 2
        });
    });
});
