/**
 * Checks if a value qequals false
 * val === false shorthand
 *
 * @function isFalse
 * @memberof Is
 * @since 2.8.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isFalse(false)
 *
 * @example
 * //returns false
 * isFalse(true)
 * isFalse(null)
 * isFalse(0)
 */
const isFalse = (val: any): boolean => val === false;

export default isFalse;
