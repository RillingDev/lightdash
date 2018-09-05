import { isTypeOf } from "./typeOf";

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
 * isString(1)
 * // => false
 */
const isString = (val: any): val is string => isTypeOf(val, "string");

export { isString };
