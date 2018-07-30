/**
 *  Creates a debounced function that delays invoking Fn
 * 
 *
 * @function fnDebounce
 * @memberof Fn
 * @param {Function} fn
 * @param {number} timeout
 * @returns {Function}
 * @example
 * const foo = (a, b) => console.log(a + b);
 * const fooDebounced = fnDebounce(foo, 500);
 * 
 * fooDebounced(50,50) => // 100
 * 
 * // function can only run 500ms after last invocation is made.
 */

const fnDebounce = (
    fn: (...args: any[]) => any,
    timeout: number
): Function => {

    let timer: any;

    return function (...args: any[]) {
        const later = function () {
            timer = undefined;
            fn(...args);
        };

        clearTimeout(timer);

        timer = setTimeout(later, timeout);

        if (!timer)
            fn(...args);

    };
}

export { fnDebounce }