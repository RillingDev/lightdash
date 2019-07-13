import { anyVoidFn } from "./lib/anyVoidFn";
/**
 * Creates a debounced function.
 *
 * Debouncing combines multiple function invocations in the given timeout into a single one.
 * @see https://css-tricks.com/the-difference-between-throttling-and-debouncing/
 *
 * @since 8.1.0
 * @param {Function} fn Function to debounce.
 * @param {number} timeout Timeout to use.
 * @returns {Function} Debounced function.
 * @example
 * const foo = (a, b) => console.log(a + b);
 * const fooDebounced = fnDebounce(foo, 500);
 * // function calls will be debounced to 500ms
 */
declare const fnDebounce: (fn: anyVoidFn<any>, timeout: number) => anyVoidFn<any>;
export { fnDebounce };
