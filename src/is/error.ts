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
 * // returns true
 * isError(new Error())
 * isError(new URIError())
 *
 * @example
 * // returns false
 * isError("foo")
 */
const isError = (val: any): boolean => isInstanceOf(val, Error);

export default isError;
