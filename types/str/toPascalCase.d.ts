/**
 * Creates a PascalCase string from an array of words.
 *
 * @memberof String
 * @since 6.2.0
 * @param {string[]} arr Words to use.
 * @returns {string} PascalCase string of the words.
 * @example
 * strToPascalCase(["foo", "bar"])
 * // => "FooBar"
 *
 * strToPascalCase(["Fizz","buzz","BaZZ"])
 * // => "FizzBuzzBazz"
 */
declare const strToPascalCase: (arr: string[]) => string;
export { strToPascalCase };
