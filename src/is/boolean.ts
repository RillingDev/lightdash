import isTypeOf from "./typeOf";

/**
 * Checks if a value is a boolean.
 *
 * @function isBoolean
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * isBoolean(true)
 * isBoolean(false)
 *
 * @example
 * // returns false
 * isBoolean(0)
 * isBoolean(null)
 * isBoolean("")
 */
const isBoolean = (val: any): boolean => isTypeOf(val, "boolean");

export default isBoolean;
