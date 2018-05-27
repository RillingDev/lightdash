/**
 * Creates an array of substrings from a camelCase string.
 *
 * @function strFromCamelCase
 * @memberof String
 * @since 6.2.0
 * @param {string} str
 * @returns {string[]}
 * @example
 * strFromPascalCase("fooBar")
 * // => ["foo", "Bar"]
 *
 * strFromPascalCase("fizzBuzzBazz")
 * // => ["fizz","Buzz","Bazz"]
 */
declare const strFromCamelCase: (str: string) => string[];
export default strFromCamelCase;
