import isTypeOf from "./typeOf";

/**
 * Checks if a value is a string.
 *
 * @function isString
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isString("foo")
 * // => true
 *
 * @example
 * isString(1)
 * // => false
 */
const isString = (val: any): boolean => isTypeOf(val, "string");

export default isString;
