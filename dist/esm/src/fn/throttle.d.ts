import { anyVoidFn } from "./lib/anyVoidFn";
/**
 * Creates a throttled function.
 *
 * Throttling ensures that the function can only be invoked once in the given timeout.
 * @see https://css-tricks.com/the-difference-between-throttling-and-debouncing/
 *
 * @memberof Fn
 * @since 3.1.0
 * @param {Function} fn Function to throttle.
 * @param {number} timeout Timeout to use.
 * @returns {Function} Throttled function.
 * @example
 * const foo = (a, b) => console.log(a + b);
 * const fooThrottled = fnThrottle(foo, 500);
 * // function calls will be throttled to 500ms
 */
declare const fnThrottle: (fn: anyVoidFn<any>, timeout: number) => anyVoidFn<any>;
export { fnThrottle };
//# sourceMappingURL=throttle.d.ts.map