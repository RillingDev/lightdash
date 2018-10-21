/**
 * Creates an array of substrings from a kebab-case string.
 *
 * @memberof String
 * @since 6.2.0
 * @param {string} str
 * @returns {string[]}
 * @example
 * strFromKebabCase("foo-bar")
 * // => ["foo", "bar"]
 *
 * strFromKebabCase("Fizz-buzz-BaZZ")
 * // => ["Fizz","buzz","BaZZ"]
 */
declare const strFromKebabCase: (str: string) => string[];
export { strFromKebabCase };
