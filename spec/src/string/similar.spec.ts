import { similar } from "../../../src/string/similar";

describe("similar", () => {
    it("gets similar", () => {
        expect(similar("Fob", ["Foo", "Bar"])).toEqual(["Foo"]);
        expect(similar("cmmit", ["init", "commit", "push"])).toEqual([
            "commit"
        ]);
        expect(similar("Kitten", ["Sitten", "Sitting", "Bitten"])).toEqual([
            "Sitten",
            "Bitten"
        ]);
        expect(similar("cmmit", ["init", "commit", "push"], true)).toEqual(
            new Map([[1, ["commit"]], [3, ["init"]], [5, ["push"]]])
        );
    });
});
