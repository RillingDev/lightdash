/**
 * Checks if a value qequals true
 *
 * @function isFalse
 * @memberof Is
 * @since 2.8.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isTrue(true)
 *
 * @example
 * //returns false
 * isTrue(false)
 * isTrue("foo")
 * isTrue(1)
 */
const isTrue = (val: any): boolean => val === true;

export default isTrue;
