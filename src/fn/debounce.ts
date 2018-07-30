/**
 * Creates a debounced function that delays invoking fn.
 *
 * @function fnDebounce
 * @memberof Fn
 * @param {Function} fn
 * @param {number} timeout
 * @returns {Function}
 * @example
 * const foo = (a, b) => console.log(a + b);
 * const fooThrottled = fnThrottle(foo, 500);
 * // function can only run 500ms after the last invocation was made
 */

const fnDebounce = (
    fn: (...args: any[]) => any,
    timeout: number
): ((...args: any[]) => any) => {
    let timer: any;

    // tslint:disable-next-line:only-arrow-functions
    return function(...args: any[]) {
        // tslint:disable-next-line:only-arrow-functions
        const later = function() {
            timer = undefined;
            fn(...args);
        };

        clearTimeout(timer);

        timer = setTimeout(later, timeout);

        if (!timer) {
            fn(...args);
        }
    };
};

export { fnDebounce };
