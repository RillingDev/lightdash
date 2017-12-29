/**
 * Checks if a value is a number.
 *
 * @function isNumber
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * isNumber(1)
 * isNumber(2.34)
 * isNumber(Infinity)
 * isNumber(NaN)
 *
 * @example
 * // returns false
 * isNumber("2")
 * isNumber(null)
 */
declare const isNumber: (val: any) => boolean;
export default isNumber;
