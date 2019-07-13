import { isTypeOf } from "./typeOf";

/**
 * Checks if a value is undefined.
 *
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is undefined.
 * @example
 * const a = {};
 *
 * isUndefined(a.b)
 * // => true
 *
 * isUndefined(undefined)
 * // => true
 *
 * isUndefined(null)
 * // => false
 *
 * isUndefined(1)
 * // => false
 */
const isUndefined = (val: any): val is undefined => isTypeOf(val, "undefined");

export { isUndefined };
