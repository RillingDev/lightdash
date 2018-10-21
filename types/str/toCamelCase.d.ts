/**
 * Creates a camelCase string from an array of substrings.
 *
 * @memberof String
 * @since 6.2.0
 * @param {string[]} arr
 * @returns {string}
 * @example
 * strToCamelCase(["foo", "bar"])
 * // => "fooBar"
 *
 * strToCamelCase(["Fizz","buzz","BaZZ"])
 * // => "fizzBuzzBazz"
 */
declare const strToCamelCase: (arr: string[]) => string;
export { strToCamelCase };
