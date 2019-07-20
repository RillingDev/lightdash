import { camelCase, upperFirst } from "lodash";

/**
 * Creates a PascalCase string from a string.
 *
 * @since 6.2.0
 * @param str String to use.
 * @returns PascalCase string of the input string.
 * @example
 * pascalCase(["fooBar")
 * // => "FooBar"
 *
 * pascalCase("__foo_bar__")
 * // => "FizzBuzzBazz"
 */
const pascalCase = (str: string): string => upperFirst(camelCase(str));

export { pascalCase };
