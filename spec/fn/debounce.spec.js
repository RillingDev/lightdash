const { fnDebounce } = require("../../dist/lightdash.common");

describe('fnDebounce', () => {
    let results = [];

    beforeAll(function () {
        let timer = 1;
        const foo = (a, b) => results.push(a + b);
        const fooDebounced = fnDebounce(foo, 10);

        return new Promise(function (resolve) {
            const interval = setInterval(() => {
                results.push(timer)
                if (timer >= 5) {
                    clearInterval(interval);
                    setTimeout(() => {
                        resolve();
                    }, 20)
                } else {
                    fooDebounced(5, 5);
                    timer += 1;
                }
            }, 5);

        });
    });

    it("should have 6 in length", () => {
        // [1,2,3,4,5,10]
        console.log(results)
        expect(results.length).toBe(6)
    })

    it("should be 10", () => {
        console.log(results)
        expect(results[results.length - 1]).toBe(10)
    })
})