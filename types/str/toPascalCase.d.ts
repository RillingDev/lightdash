/**
 * Creates a PascalCase string from an array of substrings.
 *
 * @memberof String
 * @since 6.2.0
 * @param {string[]} arr
 * @returns {string}
 * @example
 * strToPascalCase(["foo", "bar"])
 * // => "FooBar"
 *
 * strToPascalCase(["Fizz","buzz","BaZZ"])
 * // => "FizzBuzzBazz"
 */
declare const strToPascalCase: (arr: string[]) => string;
export { strToPascalCase };
