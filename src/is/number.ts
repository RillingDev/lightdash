import isTypeOf from "./typeOf";

/**
 * Checks if a value is a number
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isNumber(1)
 * isNumber(2.34)
 *
 * @example
 * //returns false
 * isNumber(null)
 */
const isNumber = (val: any): boolean => isTypeOf(val, "number");

export default isNumber;
