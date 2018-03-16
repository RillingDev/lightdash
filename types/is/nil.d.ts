/**
 * Checks if a value is undefined or null.
 *
 * @function isNil
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isNil(null)
 * // => true
 *
 * isNil(undefined)
 * // => true
 *
 * @example
 * isNil(0)
 * // => false
 *
 * isNil("")
 * // => false
 */
declare const isNil: (val: any) => boolean;
export default isNil;
