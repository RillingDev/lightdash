import isInstanceOf from "./instanceOf";

/**
 * Checks if a value is an error.
 *
 * @function isError
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isError(new Error())
 * // => true
 *
 * isError(new URIError())
 * // => true
 *
 * @example
 * isError("foo")
 * // => false
 */
const isError = (val: any): boolean => isInstanceOf(val, Error);

export default isError;
