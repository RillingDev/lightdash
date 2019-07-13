/**
 * Creates a PascalCase string from an array of words.
 *
 * @since 6.2.0
 * @param arr Words to use.
 * @returns PascalCase string of the words.
 * @example
 * strToPascalCase(["foo", "bar"])
 * // => "FooBar"
 *
 * strToPascalCase(["Fizz","buzz","BaZZ"])
 * // => "FizzBuzzBazz"
 */
declare const strToPascalCase: (arr: string[]) => string;
export { strToPascalCase };
