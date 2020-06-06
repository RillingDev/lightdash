import { deepFreeze } from "../../src/object/deepFreeze";

describe("deepFreeze", () => {
    it("seals all", () => {
        const a = { a: { b: 2 }, b: [1, { foo: "foo" }], c: 2 };
        deepFreeze(a);

        expect(Object.isFrozen(a)).toBeTrue();
        expect(Object.isFrozen(a.a)).toBeTrue();
        expect(Object.isFrozen(a.a.b)).toBeTrue();
        expect(Object.isFrozen(a.b)).toBeTrue();
        expect(Object.isFrozen(a.b[1])).toBeTrue();
    });

    it("works with circular refs", () => {
        const a = { b: null as object | null };
        a.b = { a: a };

        deepFreeze(a);

        expect(Object.isFrozen(a)).toBeTrue();
        expect(Object.isFrozen(a.b)).toBeTrue();
    });
});
