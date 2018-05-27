import strFromPascalCase from "./fromPascalCase";

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
const strFromCamelCase = strFromPascalCase;

export default strFromCamelCase;
