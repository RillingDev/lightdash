/**
 * Returns a new array with the first occurrence of the item removed.
 *
 * @function arrRemoveItem
 * @memberof Array
 * @since 2.8.0
 * @param {any[]} arr
 * @param {any} targetItem
 * @returns {any[]}
 * @example
 * arrRemoveItem(["foo", "bar", "fizz"], "bar")
 * // => ["foo", "fizz"]
 */
declare const arrRemoveItem: <T>(arr: T[], targetItem: T) => T[];
export default arrRemoveItem;
