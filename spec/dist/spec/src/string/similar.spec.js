"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const similar_1 = require("../../../src/string/similar");
describe("similar", () => {
    it("gets similar", () => {
        expect(similar_1.similar("Fob", ["Foo", "Bar"])).toEqual(["Foo"]);
        expect(similar_1.similar("cmmit", ["init", "commit", "push"])).toEqual([
            "commit"
        ]);
        expect(similar_1.similar("Kitten", ["Sitten", "Sitting", "Bitten"])).toEqual([
            "Sitten",
            "Bitten"
        ]);
        expect(similar_1.similar("cmmit", ["init", "commit", "push"], true)).toEqual(new Map([
            [1, ["commit"]],
            [3, ["init"]],
            [5, ["push"]]
        ]));
    });
});
