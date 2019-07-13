/**
 * Returns an array with the item at the index removed.
 *
 * @since 2.8.0
 * @param arr Array to use.
 * @param targetIndex Index to remove.
 * @returns Array with the index removed.
 * @example
 * arrRemoveIndex(["foo", "bar", "fizz"], 1)
 * // => ["foo", "fizz"]
 */
const arrRemoveIndex = <T>(arr: T[], targetIndex: number): T[] =>
    arr.filter((val, index) => index !== targetIndex);

export { arrRemoveIndex };
