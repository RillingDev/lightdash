import { anyVoidFn } from "./lib/anyVoidFn";
/**
 * Creates a debounced function that delays invoking the function.
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
declare const fnDebounce: (fn: anyVoidFn, timeout: number) => anyVoidFn;
export { fnDebounce };