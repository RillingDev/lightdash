/**
 * Checks if a value is a valid index.
 *
 * @function isIndex
 * @memberof Is
 * @since 5.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isIndex(123)
 * // => true
 *
 * isIndex(0.43)
 * // => false
 *
 * isIndex(-4)
 * // => false
 *
 * isIndex(Infinity)
 * // => false
 */
declare const isIndex: (val: any) => boolean;
export { isIndex };
