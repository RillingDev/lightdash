/**
 * Returns the levenshtein string distance of two strings.
 *
 * @since 6.3.0
 * @category String
 * @param string1 First string to compare.
 * @param string2 Second string to compare.
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
declare const distance: (string1: string, string2: string) => number;
export { distance };
//# sourceMappingURL=distance.d.ts.map