/**
 * Returns the levenshtein string distance of two strings.
 *
 * @since 6.3.0
 * @memberOf String
 * @param str1 First string to compare.
 * @param str2 Second string to compare.
 * @returns Distance between the two strings.
 * @example
 * distance("Kitten", "Sitting")
 * // => 3
 *
 * distance("String", "Stribng")
 * // => 1
 *
 * distance("foo", "foo")
 * // => 0
 */
declare const distance: (str1: string, str2: string) => number;
export { distance };
