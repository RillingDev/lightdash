import { arrCompact } from "../arr/compact";
import { Delimiters } from "./lib/Delimiters";

/**
 * Creates an array of words from a kebab-case string.
 *
 * @memberof String
 * @since 6.2.0
 * @param {string} str String in kebab-case.
 * @returns {string[]} Words of the kebab-case string.
 * @example
 * strFromKebabCase("foo-bar")
 * // => ["foo", "bar"]
 *
 * strFromKebabCase("Fizz-buzz-BaZZ")
 * // => ["Fizz","buzz","BaZZ"]
 */
const strFromKebabCase = (str: string): string[] =>
    arrCompact(str.split(Delimiters.KEBAB));

export { strFromKebabCase };
