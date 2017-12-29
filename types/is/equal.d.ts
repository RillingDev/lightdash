/**
 * Recursively checks if two items and their the contents are equal.
 *
 * @function isEqual
 * @memberof Is
 * @since 1.0.0
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 * @example
 * // returns true
 * isEqual(1, 1)
 * isEqual({}, {})
 * isEqual([1, 2], [1, 2])
 * isEqual([1, 2, [3, 4]], [1, 2, [3, 4]])
 *
 * @example
 * // returns false
 * isEqual([1, 2, 3], [1])
 * isEqual([1, 2, [3]], [1, 2, [4]])
 */
declare const isEqual: (a: any, b: any) => boolean;
export default isEqual;
