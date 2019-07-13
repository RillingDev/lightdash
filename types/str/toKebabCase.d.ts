/**
 * Creates a kebab-case string from an array of words.
 *
 * @since 6.2.0
 * @param {string[]} arr Words to use.
 * @returns {string} kebab-case string of the words.
 * @example
 * strToKebabCase(["foo", "bar"])
 * // => "foo-bar"
 *
 * strToKebabCase(["Fizz","buzz","BaZZ"])
 * // => "fizz-buzz-bazz"
 */
declare const strToKebabCase: (arr: string[]) => string;
export { strToKebabCase };
