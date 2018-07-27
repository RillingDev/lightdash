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
    fn: (...args: any[]) => Function,
    timeout: number
): Function => {
    let timer: NodeJS.Timer | undefined;

    return function (...args: any[]) {
        const later = function () {
            timer = undefined;
            // fn.apply(fn) satisfies `this` operator; `this` implicitly has type 'any' 
            fn.apply(fn, args);
        };

        const callNow = !timer;

        if (timer !== undefined)
            clearTimeout(timer);

        timer = setTimeout(later, timeout);

        if (callNow)
            fn.apply(fn, args);

    };
}

export { fnDebounce }