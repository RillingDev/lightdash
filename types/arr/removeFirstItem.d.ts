/**
 * Returns an array with the first instance of the given item removed.
 *
 * @function arrRemoveFirstItem
 * @memberof Array
 * @since 8.1.0
 * @param {any[]} arr
 * @param {any} targetItem
 * @returns {any[]}
 * @example
 * arrRemoveFirstItem(["foo", "bar", "fizz", "bar"], "bar")
 * // => ["foo", "fizz"]
 */
declare const arrRemoveFirstItem: <T>(arr: T[], targetItem: T) => T[];
export { arrRemoveFirstItem };
