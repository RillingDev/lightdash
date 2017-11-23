const fnThrottle = function (fn, timeout, immediate = false) {
    const getTimer = () => setTimeout(() => {
        canRun = true;
        clearTimeout(timer);
    }, timeout);
    let canRun = immediate;
    let timer = immediate ? -1 : getTimer();
    return function () {
        if (canRun) {
            canRun = false;
            timer = getTimer();
            // @ts-ignore
            return fn.apply(this, arguments);
        }
    };
};

const Foo = class {
    constructor(a) {
        this.a = a;
        this.getAThrottled = fnThrottle(b => {
            console.log(this)

            return this.a + b;
        }, 1000);
    }
    getA(b) {
        return this.a + b;
    }
}

const foo = new Foo(6);

/* setInterval(() => {
    console.log(foo.getA(9));
}, 10);
 */

console.log(foo.getAThrottled(2));
