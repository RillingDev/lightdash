import { isInstanceOf } from "./instanceOf";

/**
 * Checks if a value is an error.
 *
 * @function isError
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isError(new URIError())
 * // => true
 *
 * isError("foo")
 * // => false
 */
const isError = (val: any): val is Error => isInstanceOf(val, Error);

export { isError };
