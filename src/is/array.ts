/**
 * Checks if a value is an array.
 *
 * `Array.isArray` shorthand.
 *
 * @function isArray
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isArray([]);
 * // => true
 *
 * isArray([1, 2, 3]);
 * // => true
 *
 * @example
 * isArray({});
 * // => false
 */
const isArray = Array.isArray;

export default isArray;
