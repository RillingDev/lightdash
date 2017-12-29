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
 * // returns ["foo", "fizz"]
 * arrRemoveItem(["foo", "bar", "fizz"], "bar")
 */
declare const arrRemoveItem: <T>(arr: T[], item: any) => T[];
export default arrRemoveItem;
