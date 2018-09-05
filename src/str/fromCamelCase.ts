import { strFromPascalCase } from "./fromPascalCase";

/**
 * Creates an array of substrings from a camelCase string.
 *
 * Alias of {@link strFromPascalCase}.
 *
 * @function strFromCamelCase
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
const strFromCamelCase = strFromPascalCase;

export { strFromCamelCase };
