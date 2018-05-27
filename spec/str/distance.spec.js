const { strDistance } = require("../../dist/lightdash.common");

describe("Main test", () => {
    it("Normal 1", function() {
        expect(strDistance("Kitten", "Sitting")).toBe(3);
    });

    it("Normal 2", () => {
        expect(strDistance("String", "Stribng")).toBe(1);
    });

    it("Normal 3", () => {
        expect(strDistance("Foo", "Fizz")).toBe(3);
    });

    it("Complex", () => {
        expect(strDistance("Lorem!", "23Xd")).toBe(6);
    });

    it("Long", () => {
        expect(
            strDistance(
                "fooooooooooooooooooooooooooooooooooooooooooo",
                "fooooooooooooodooooooooooooooooooosa4oooooooo"
            )
        ).toBe(4);
    });

    it("Emtpy", () => {
        expect(strDistance("", "")).toBe(0);
    });

    it("Half emtpy case", () => {
        expect(strDistance("Lorem", "")).toBe(5);
    });

    it("Special characters", () => {
        expect(strDistance("ͻͼͽϖϘϚϙϛ", "ͻͼͽϖϘϙϚϛ")).toBe(2);
    });

    it("Emoji", () => {
        expect(strDistance("😀 😃 😄 ", "😀 😃 😄😄")).toBe(2);
    });
});
