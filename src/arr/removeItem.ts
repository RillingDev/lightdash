import { arrRemoveIndex } from "./removeIndex";

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
 */
const arrRemoveItem = <T>(arr: T[], targetItem: T, removeAll = true): T[] =>
    removeAll ?
        arr.filter(item => item !== targetItem) :
        arrRemoveIndex(arr, arr.indexOf(targetItem));

export { arrRemoveItem };
