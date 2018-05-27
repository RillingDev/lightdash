/**
 * Returns levenshtein string distance of two strings.
 *
 * @function strDistance
 * @memberof String
 * @since 6.3.0
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 * @example
 * strDistance("Kitten", "Sitting")
 * // => 3
 *
 * strDistance("String", "Stribng")
 * // => 1
 *
 * strDistance("foo", "foo")
 * // => 0
 */
declare const strDistance: (str1: string, str2: string) => number;
export default strDistance;
