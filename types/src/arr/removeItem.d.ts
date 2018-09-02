/**
 * Returns an array with all instances of the given item removed.
 *
 * @function arrRemoveItem
 * @memberof Array
 * @since 2.8.0
 * @param {any[]} arr
 * @param {any} targetItem
 * @param {boolean} [removeAll=true] removeAll
 * @returns {any[]}
 * @example
 * arrRemoveItem(["foo", "bar", "fizz", "bar"], "bar")
 * // => ["foo", "fizz"]
 *
 * arrRemoveItem(["foo", "bar", "fizz", "bar"], "bar", false)
 * // => ["foo", "fizz", "bar"]
 */
declare const arrRemoveItem: <T>(arr: T[], targetItem: T, removeAll?: boolean) => T[];
export { arrRemoveItem };
