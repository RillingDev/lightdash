import arrCompact from "../arr/compact";

/**
 * Creates an array of substrings from a PascalCase string.
 *
 * @function strFromPascalCase
 * @memberof String
 * @since 6.2.0
 * @param {string} str
 * @returns {string[]}
 * @example
 * strFromPascalCase("FooBar")
 * // => ["Foo", "Bar"]
 *
 * strFromPascalCase("FizzBuzzBazz")
 * // => ["Fizz","Buzz","Bazz"]
 */
const strFromPascalCase = (str: string): string[] => {
    const result: string[] = [];
    let cache: string[] = [];

    str.split("").forEach((letter, index) => {
        if (index > 0 && letter !== letter.toLowerCase()) {
            result.push(cache.join(""));
            cache = [];
        }

        cache.push(letter);
    });

    result.push(cache.join(""));

    return arrCompact(result);
};

export default strFromPascalCase;
