import { strSimilar } from "../../../src/str/similar";

describe("strSimilar", () => {
    it("gets similar", () => {
        expect(strSimilar("Fob", ["Foo", "Bar"])).toEqual(["Foo"]);
        expect(strSimilar("cmmit", ["init", "commit", "push"])).toEqual([
            "commit"
        ]);
        expect(strSimilar("Kitten", ["Sitten", "Sitting", "Bitten"])).toEqual([
            "Sitten",
            "Bitten"
        ]);
        expect(strSimilar("cmmit", ["init", "commit", "push"], true)).toEqual(
            new Map([[1, ["commit"]], [3, ["init"]], [5, ["push"]]])
        );
    });
});
