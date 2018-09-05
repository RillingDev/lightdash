/**
 * Checks if a value is an array.
 *
 * Alias of the native `Array.isArray`.
 *
 * @function isArray
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isArray([1, 2, 3]);
 * // => true
 *
 * isArray({});
 * // => false
 */
const isArray = Array.isArray;

export { isArray };
