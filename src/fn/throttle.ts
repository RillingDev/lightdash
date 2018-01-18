/**
 * Throttles a function to only run every n ms.
 *
 * Useful for event handlers that fire several times a second, such as scroll or resize
 *
 * @function fnThrottle
 * @memberof Fn
 * @since 3.1.0
 * @param {Function} fn
 * @param {number} timeout
 * @param {boolean} [immediate=false]
 * @returns {Function}
 * @example
 * const foo = (a, b) => console.log(a + b);
 * const fooThrottled = fnThrottle(foo, 500); // function that can only run every 500ms
 */
const fnThrottle = (
    fn: (...args: any[]) => any,
    timeout: number,
    immediate: boolean = false
) => {
    const getTimer = () =>
        setTimeout(() => {
            canRun = true;
            clearTimeout(timer);
        }, timeout);
    let canRun: boolean = immediate;
    let timer: number = immediate ? -1 : getTimer();

    return function() {
        if (canRun) {
            canRun = false;
            timer = getTimer();

            // @ts-ignore
            return fn.apply(this, arguments);
        }
    };
};

export default fnThrottle;
