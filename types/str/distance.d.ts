/**
 * Returns the levenshtein string distance of two strings.
 *
 * @memberof String
 * @since 6.3.0
 * @param {string} str1 First string to compare.
 * @param {string} str2 Second string to compare.
 * @returns {number} Distance between the two strings.
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
export { strDistance };
