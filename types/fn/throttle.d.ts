import { anyVoidFn } from "./lib/anyVoidFn";
/**
 * Throttles a function to only run every n ms.
 *
 * @memberof Fn
 * @since 3.1.0
 * @param {Function} fn Function to throttle.
 * @param {number} timeout Timeout to use.
 * @param {boolean} [immediate=false] If the function should be invoked immediatly.
 * @returns {Function} Throttled function.
 * @example
 * const foo = (a, b) => console.log(a + b);
 * const fooThrottled = fnThrottle(foo, 500);
 * // function can only run every 500ms
 */
declare const fnThrottle: (fn: anyVoidFn, timeout: number, immediate?: boolean) => anyVoidFn;
export { fnThrottle };
