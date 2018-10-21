import { anyVoidFn } from "./lib/anyVoidFn";

/**
 * Creates a debounced function that delays invoking the function.
 *
 * @memberof Fn
 * @param {Function} fn Function to debounce.
 * @param {number} timeout Timeout to use.
 * @returns {Function} Debounced function.
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
