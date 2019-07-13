import { arrCompact } from "../arr/compact";
import { Delimiters } from "./lib/Delimiters";

/**
 * Creates an array of words from a snake_case string.
 *
 * @since 6.2.0
 * @param {string} str String in snake_case.
 * @returns {string[]} Words of the snake_case string.
 * @example
 * strFromSnakeCase("foo_bar")
 * // => ["foo", "bar"]
 *
 * strFromSnakeCase("Fizz_buzz_BaZZ")
 * // => ["Fizz","buzz","BaZZ"]
 */
const strFromSnakeCase = (str: string): string[] =>
    arrCompact(str.split(Delimiters.SNAKE));

export { strFromSnakeCase };
