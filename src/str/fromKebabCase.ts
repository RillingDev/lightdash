import { arrCompact } from "../arr/compact";
import { delimiters } from "./lib/delimiters";

/**
 * Creates an array of substrings from a kebab-case string.
 *
 * @function strFromKebabCase
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
const strFromKebabCase = (str: string): string[] =>
    arrCompact(str.split(delimiters.kebab));

export { strFromKebabCase };
