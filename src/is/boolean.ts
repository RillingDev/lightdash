import { isTypeOf } from "./typeOf";

/**
 * Checks if a value is a boolean.
 *
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a boolean.
 * @example
 * isBoolean(true)
 * // => true
 *
 * isBoolean(false)
 * // => true
 *
 * isBoolean(0)
 * // => false
 *
 * isBoolean(null)
 * // => false
 */
const isBoolean = (val: any): val is boolean => isTypeOf(val, "boolean");

export { isBoolean };
