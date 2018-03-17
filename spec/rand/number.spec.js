const { randNumber } = require("../../dist/lightdash.common");

const RUNS = 2 ** 4;

describe("randNumber", () => {
    for (let i = 0; i < RUNS; i++) {
        it(`No Args#${i}`, () => {
            expect([0, 1].includes(randNumber())).toBe(true);
        });
    }

    for (let i = 0; i < RUNS; i++) {
        it(`One Arg#${i}`, () => {
            expect([0, 1].includes(randNumber(0))).toBe(true);
        });
    }

    for (let i = 0; i < RUNS; i++) {
        it(`Two Args#${i}`, () => {
            expect([0, 1].includes(randNumber(0, 1))).toBe(true);
        });
    }

    for (let i = 0; i < RUNS; i++) {
        it(`Two Args Large#${i}`, () => {
            const max = 1000000;
            const val = randNumber(0, max);

            expect(Number.isInteger(val) && val > 0 && val <= max).toBe(true);
        });
    }

    for (let i = 0; i < RUNS; i++) {
        it(`Two Args Large Inverted#${i}`, () => {
            const max = 1000000;
            const val = randNumber(max, 0);

            expect(Number.isInteger(val) && val > 0 && val <= max).toBe(true);
        });
    }

    for (let i = 0; i < RUNS; i++) {
        it(`Empty Range#${i}`, () => {
            expect(randNumber(0, 0)).toBe(0);
        });
    }

    for (let i = 0; i < RUNS; i++) {
        it(`Float#${i}`, () => {
            const val = randNumber(0, 1, true);
            expect(!Number.isInteger(val) && val > 0 && val < 1).toBe(true);
        });
    }

    for (let i = 0; i < RUNS; i++) {
        it(`Float Large#${i}`, () => {
            const max = 1000000;
            const val = randNumber(max, 0, true);

            expect(!Number.isInteger(val) && val > 0 && val < max).toBe(true);
        });
    }
});
