import arrCompact from "../arr/compact";
import delimiters from "./lib/delimiters";

/**
 * Creates an array of substrings from a snake_case string.
 *
 * @function strFromSnakeCase
 * @memberof String
 * @since 6.2.0
 * @param {string} str
 * @returns {string[]}
 * @example
 * strFromSnakeCase("foo_bar")
 * // => ["foo", "bar"]
 *
 * strFromSnakeCase("Fizz_buzz_BaZZ")
 * // => ["Fizz","buzz","BaZZ"]
 */
const strFromSnakeCase = (str: string): string[] =>
    arrCompact(str.split(delimiters.snake));

export default strFromSnakeCase;
