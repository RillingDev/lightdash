import { anyVoidFn } from "./lib/anyVoidFn";

/**
 * Creates a debounced function that delays invoking the fn.
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
const fnDebounce = (fn: anyVoidFn, timeout: number): anyVoidFn => {
    let timer: any;

    // tslint:disable-next-line:only-arrow-functions
    return function() {
        clearTimeout(timer);

        timer = setTimeout(() => {
            timer = null;
            fn(...arguments);
        }, timeout);

        if (!timer) {
            fn(...arguments);
        }
    };
};

export { fnDebounce };
