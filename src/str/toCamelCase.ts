/**
 * Creates a camelCase string from an array of substrings.
 *
 * @function strToCamelCase
 * @memberof String
 * @since 6.2.0
 * @param {string[]} arr
 * @returns {string}
 * @example
 * strToCamelCase(["foo", "bar"])
 * // => "fooBar"
 *
 * strToCamelCase(["Fizz","buzz","BaZZ"])
 * // => "fizzBuzzBazz"
 */
const strToCamelCase = (arr: string[]): string =>
    arr
        .map(
            (val, index) =>
                index === 0
                    ? val.toLowerCase()
                    : val.substr(0, 1).toUpperCase() +
                      val.substr(1).toLowerCase()
        )
        .join("");

export { strToCamelCase };
