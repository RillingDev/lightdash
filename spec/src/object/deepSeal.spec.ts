import { deepSeal } from "../../../src/object/deepSeal";

describe("deepSeal", () => {
    it("seals all", () => {
        const a = { a: { b: 2 }, b: [1, { foo: "foo" }], c: 2 };
        deepSeal(a);

        expect(Object.isSealed(a)).toBeTrue();
        expect(Object.isSealed(a.a)).toBeTrue();
        expect(Object.isSealed(a.a.b)).toBeTrue();
        expect(Object.isSealed(a.b)).toBeTrue();
        expect(Object.isSealed(a.b[1])).toBeTrue();
    });
});
