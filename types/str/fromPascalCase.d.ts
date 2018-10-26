/**
 * Creates an array of words from a PascalCase string.
 *
 * @memberof String
 * @since 6.2.0
 * @param {string} str String in PascalCase.
 * @returns {string[]} Words of the PascalCase string.
 * @example
 * strFromPascalCase("FooBar")
 * // => ["Foo", "Bar"]
 *
 * strFromPascalCase("FizzBuzzBazz")
 * // => ["Fizz","Buzz","Bazz"]
 */
declare const strFromPascalCase: (str: string) => string[];
export { strFromPascalCase };
