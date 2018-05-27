/**
 * Creates a PascalCase string from an array of substrings.
 *
 * @function strToPascalCase
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
const strToPascalCase = (arr: string[]): string =>
    arr
        .map(
            val => val.substr(0, 1).toUpperCase() + val.substr(1).toLowerCase()
        )
        .join("");

export default strToPascalCase;
