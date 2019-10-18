/**
 * Recursively checks if two values and their the contents are equal.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} a First value to check.
 * @param {any} b Second value to check.
 * @returns {boolean} If the values are equal.
 * @example
 * isEqual(1, 1)
 * // => true
 *
 * isEqual({}, {})
 * // => true
 *
 * isEqual([1, 2], [1, 2])
 * // => true
 *
 * isEqual([1, 2, [3, 4]], [1, 2, [3, 4]])
 * // => true
 *
 * isEqual([1, 2, 3], [1])
 * // => false
 *
 * isEqual([], {})
 * // => false
 *
 * isEqual(1, true)
 * // => false
 */
declare const isEqual: (a: any, b: any) => boolean;
export { isEqual };
//# sourceMappingURL=equal.d.ts.map