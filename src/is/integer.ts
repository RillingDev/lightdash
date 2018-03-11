/**
 * Checks if a value is an integer.
 *
 * `Number.isInteger` shorthand.
 *
 * @function isInteger
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * isInteger(1);
 * isInteger(2000);
 *
 * @example
 * // returns false
 * isInteger(2.34);
 * isInteger(Infinity)
 */
const isInteger = Number.isInteger;

export default isInteger;
