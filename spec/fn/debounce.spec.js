const { fnDebounce } = require("../../dist/lightdash.common");

describe('fnDebounce', () => {
    let results = [];

    beforeAll(function () {
        let timer = 0;
        const foo = (a, b) => results.push(a + b);
        const fooDebounced = fnDebounce(foo, 1000);

        return new Promise(function (resolve, reject) {
            const interval = setInterval(() => {
                fooDebounced(5, 5);
                timer += 1;
                if (timer >= 5) {
                    clearInterval(interval);
                    resolve();
                }
            }, 50);

        });
    });

    it("should have 1 in length", () => {
        console.log(results)
        expect(results.length).toBe(1)
    })

    it("should be 10", () => {
        console.log(results)
        expect(results[0]).toBe(10)
    })
})