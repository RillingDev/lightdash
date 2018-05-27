/**
 * Creates a kebab-case string from an array of substrings.
 *
 * @function strToKebabCase
 * @memberof String
 * @since 6.2.0
 * @param {string[]} arr
 * @returns {string}
 * @example
 * strToKebabCase(["foo", "bar"])
 * // => "foo-bar"
 *
 * strToKebabCase(["Fizz","buzz","BaZZ"])
 * // => "fizz-buzz-bazz"
 */
const strToKebabCase = (arr: string[]): string =>
    arr.map(val => val.toLowerCase()).join("-");

export default strToKebabCase;
