/**
 * Creates an array of substrings from a PascalCase string.
 *
 * @function strFromPascalCase
 * @memberof String
 * @since 6.2.0
 * @param {string} str
 * @returns {string[]}
 * @example
 * strFromPascalCase("FooBar")
 * // => ["Foo", "Bar"]
 *
 * strFromPascalCase("FizzBuzzBazz")
 * // => ["Fizz","Buzz","Bazz"]
 */
declare const strFromPascalCase: (str: string) => string[];
export { strFromPascalCase };
