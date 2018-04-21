const { randShuffle } = require("../../dist/lightdash.common");

const RUNS = 2 ** 8;

describe("randShuffle", () => {
    for (let i = 0; i < RUNS; i++) {
        it(`No Args#${i}`, () => {
            expect(randShuffle([])).toEqual([]);
        });
    }

    for (let i = 0; i < RUNS; i++) {
        const input = new Array(100).fill(0).map((val, index) => index);

        it(`Simple#${i}`, () => {
            expect(randShuffle(input).sort()).toEqual(input.sort());
        });
    }

    for (let i = 0; i < RUNS; i++) {
        const input = new Array(10000).fill(0).map((val, index) => index);

        it(`Simple Large#${i}`, () => {
            expect(randShuffle(input).sort()).toEqual(input.sort());
        });
    }
});
