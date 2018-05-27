/**
 * Creates a snake_case string from an array of substrings.
 *
 * @function strToSnakeCase
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
declare const strToSnakeCase: (arr: string[]) => string;
export default strToSnakeCase;
