/**
 * Creates a PascalCase string from a string.
 *
 * @since 6.2.0
 * @param str String to use.
 * @returns PascalCase string of the words.
 * @example
 * pascalCase(["fooBar")
 * // => "FooBar"
 *
 * pascalCase("__foo_bar__")
 * // => "FizzBuzzBazz"
 */
declare const pascalCase: (str: string) => string;
export { pascalCase };
