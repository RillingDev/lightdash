/**
 * Creates a debounced function.
 *
 * Debouncing combines multiple function invocations in the given timeout into a single one.
 * @see https://css-tricks.com/the-difference-between-throttling-and-debouncing/
 *
 * @memberof Fn
 * @since 8.1.0
 * @param {Function} fn Function to debounce.
 * @param {number} timeout Timeout to use.
 * @returns {Function} Debounced function.
 * @example
 * const foo = (a, b) => console.log(a + b);
 * const fooDebounced = fnDebounce(foo, 500);
 * // function calls will be debounced to 500ms
 */
const fnDebounce = (fn, timeout) => {
    let timer = null; // Seems to require any, as the return type of the browser and node are different here.
    // tslint:disable-next-line:only-arrow-functions
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, Array.of(arguments));
        }, timeout);
    };
};
export { fnDebounce };
//# sourceMappingURL=debounce.js.map