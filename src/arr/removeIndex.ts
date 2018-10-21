/**
 * Returns an array with the item at the index removed.
 *
 * @memberof Array
 * @since 2.8.0
 * @param {any[]} arr Array to use.
 * @param {number} targetIndex Index to remove.
 * @returns {any[]} Array with the index removed.
 * @example
 * arrRemoveIndex(["foo", "bar", "fizz"], 1)
 * // => ["foo", "fizz"]
 */
const arrRemoveIndex = <T>(arr: T[], targetIndex: number): T[] =>
    arr.filter((val, index) => index !== targetIndex);

export { arrRemoveIndex };
