/**
 * Creates an array of substrings from a camelCase string.
 *
 * Alias of {@link strFromPascalCase}.
 *
 * @memberof String
 * @since 6.2.0
 * @param {string} str
 * @returns {string[]}
 * @example
 * strFromCamelCase("fooBar")
 * // => ["foo", "Bar"]
 *
 * strFromCamelCase("fizzBuzzBazz")
 * // => ["fizz","Buzz","Bazz"]
 */
declare const strFromCamelCase: (str: string) => string[];
export { strFromCamelCase };
