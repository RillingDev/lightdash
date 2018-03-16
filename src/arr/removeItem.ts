import arrRemoveIndex from "./removeIndex";

/**
 * Returns a new array with the first occurrence of the item removed.
 *
 * @function arrRemoveItem
 * @memberof Array
 * @since 2.8.0
 * @param {any[]} arr
 * @param {any} item
 * @returns {any[]}
 * @example
 * arrRemoveItem(["foo", "bar", "fizz"], "bar")
 * // => ["foo", "fizz"]
 */
const arrRemoveItem = <T>(arr: T[], item: T): T[] =>
    arr.includes(item) ? arrRemoveIndex(arr, arr.indexOf(item)) : arr;

export default arrRemoveItem;
