/**
 * Creates a camelCase string from an array of words.
 *
 * @memberof String
 * @since 6.2.0
 * @param {string[]} arr Words to use.
 * @returns {string} camelCase string of the words.
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
