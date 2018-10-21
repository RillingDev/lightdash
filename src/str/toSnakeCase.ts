import { Delimiters } from "./lib/Delimiters";

/**
 * Creates a snake_case string from an array of substrings.
 *
 * @memberof String
 * @since 6.2.0
 * @param {string[]} arr
 * @returns {string}
 * @example
 * strToSnakeCase(["foo", "bar"])
 * // => "foo_bar"
 *
 * strToSnakeCase(["Fizz","buzz","BaZZ"])
 * // => "fizz_buzz_bazz"
 */
const strToSnakeCase = (arr: string[]): string =>
    arr.map(val => val.toLowerCase()).join(Delimiters.SNAKE);

export { strToSnakeCase };
