import { Delimiters } from "./lib/Delimiters";
/**
 * Creates a kebab-case string from an array of words.
 *
 * @memberof String
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
const strToKebabCase = (arr) => arr.map(val => val.toLowerCase()).join(Delimiters.KEBAB);
export { strToKebabCase };
//# sourceMappingURL=toKebabCase.js.map