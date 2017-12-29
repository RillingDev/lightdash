/**
 * Checks if a value is a promise.
 *
 * @function isPromise
 * @memberof Is
 * @since 3.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * const foo = new Promise((resolve, reject) => resolve("foo"));
 *
 * isPromise(foo);
 *
 * @example
 * // returns false
 * isPromise(() => "foo");
 */
declare const isPromise: (val: any) => boolean;
export default isPromise;
