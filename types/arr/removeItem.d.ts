/**
 * Returns an array with all instances of the given item removed.
 *
 * @function arrRemoveItem
 * @memberof Array
 * @since 2.8.0
 * @param {any[]} arr
 * @param {any} targetItem
 * @returns {any[]}
 * @example
 * arrRemoveItem(["foo", "bar", "fizz", "bar"], "bar")
 * // => ["foo", "fizz"]
 */
declare const arrRemoveItem: <T>(arr: T[], targetItem: T) => T[];
export { arrRemoveItem };
