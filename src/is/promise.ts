import isFunction from "./function";

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
const isPromise = (val: any): boolean =>
    isFunction(val.then) && isFunction(val.catch);

export default isPromise;
