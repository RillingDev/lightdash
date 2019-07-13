/**
 * Creates a PascalCase string from an array of words.
 *
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
const strToPascalCase = (arr: string[]): string =>
    arr
        .map(
            val => val.substr(0, 1).toUpperCase() + val.substr(1).toLowerCase()
        )
        .join("");

export { strToPascalCase };
