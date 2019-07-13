import { isTypeOf } from "./typeOf";

/**
 * Checks if a value is a number.
 *
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a number.
 * @example
 * isNumber(1)
 * // => true
 *
 * isNumber(2.34)
 * // => true
 *
 * isNumber(Infinity)
 * // => true
 *
 * isNumber(NaN)
 * // => true
 * // (NaN is considered a number, see IEEE_754)
 *
 * isNumber("2")
 * // => false
 *
 * isNumber(null)
 * // => false
 */
const isNumber = (val: any): val is number => isTypeOf(val, "number");

export { isNumber };
