import { Delimiters } from "./lib/Delimiters";
/**
 * Creates a snake_case string from an array of words.
 *
 * @memberof String
 * @since 6.2.0
 * @param {string[]} arr Words to use.
 * @returns {string} snake_case string of the words.
 * @example
 * strToSnakeCase(["foo", "bar"])
 * // => "foo_bar"
 *
 * strToSnakeCase(["Fizz","buzz","BaZZ"])
 * // => "fizz_buzz_bazz"
 */
const strToSnakeCase = (arr) => arr.map(val => val.toLowerCase()).join(Delimiters.SNAKE);
export { strToSnakeCase };
//# sourceMappingURL=toSnakeCase.js.map