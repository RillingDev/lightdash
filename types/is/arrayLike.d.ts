/**
 * Checks if a value is object-like and has a length property.
 *
 * @function isArrayLike
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * isArrayLike([])
 * isArrayLike({length: 0})
 *
 * @example
 * // returns false
 * isArrayLike({})
 * isArrayLike(null)
 * isArrayLike("foo")
 * isArrayLike(1)
 */
declare const isArrayLike: (val: any) => boolean;
export default isArrayLike;
