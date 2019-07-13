import { arrRemoveIndex } from "./removeIndex";

/**
 * Returns an array with instances of the given item removed.
 *
 * @since 2.8.0
 * @param arr Array to use.
 * @param targetItem Item to remove.
 * @param [removeAll=true] If all occurrences should be removed, otherwise just the first occurrence will be.
 * @returns Array with the item removed.
 * @example
 * arrRemoveItem(["foo", "bar", "fizz", "bar"], "bar")
 * // => ["foo", "fizz"]
 *
 * arrRemoveItem(["foo", "bar", "fizz", "bar"], "bar", false)
 * // => ["foo", "fizz", "bar"]
 */
const arrRemoveItem = <T>(arr: T[], targetItem: T, removeAll = true): T[] =>
    removeAll
        ? arr.filter(item => item !== targetItem)
        : arrRemoveIndex(arr, arr.indexOf(targetItem));

export { arrRemoveItem };
