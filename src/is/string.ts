import { isTypeOf } from "./typeOf";

/**
 * Checks if a value is a string.
 *
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} if the value is a string.
 * @example
 * isString("foo")
 * // => true
 *
 * isString(1)
 * // => false
 */
const isString = (val: any): val is string => isTypeOf(val, "string");

export { isString };
