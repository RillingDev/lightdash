/**
 * Returns an array with the given item removed.
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
const arrRemoveItem = <T>(arr: T[], targetItem: T): T[] =>
    arr.filter(item => item !== targetItem);

export default arrRemoveItem;
