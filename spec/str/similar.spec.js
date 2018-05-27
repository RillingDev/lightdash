const { strSimilar } = require("../../dist/lightdash.common");

describe("Main test", () => {
    it("Single result", () => {
        const result = strSimilar("Fob", ["Foo", "Bar"]);

        expect(result).toEqual(["Foo"]);
    });
    it("Multiple results 1", () => {
        const result = strSimilar("Fob", ["Foo", "Fbo", "Fbb", "Bfo"]);

        expect(result).toEqual(["Foo", "Fbb"]);
    });
    it("Multiple results 2", () => {
        const result = strSimilar("cmmit", ["init", "commit", "push"]);

        expect(result).toEqual(["commit"]);
    });
    it("Multiple results 3", () => {
        const result = strSimilar("Kitten", ["Sitten", "Sitting", "Bitten"]);

        expect(result).toEqual(["Sitten", "Bitten"]);
    });
    it("Full result", () => {
        const result = strSimilar("cmmit", ["init", "commit", "push"], true);

        expect(result).toEqual(
            new Map([[1, ["commit"]], [3, ["init"]], [5, ["push"]]])
        );
    });
});
