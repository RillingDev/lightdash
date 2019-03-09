/**
 * Returns an array with all instances of the given item removed.
 *
 * @memberof Array
 * @since 2.8.0
 * @param {any[]} arr Array to use.
 * @param {any} targetItem Item to remove.
 * @param {boolean} [removeAll=true] If all or just the first occurrence should be removed.
 * @returns {any[]} Array with the item removed.
 * @example
 * arrRemoveItem(["foo", "bar", "fizz", "bar"], "bar")
 * // => ["foo", "fizz"]
 *
 * arrRemoveItem(["foo", "bar", "fizz", "bar"], "bar", false)
 * // => ["foo", "fizz", "bar"]
 */
declare const arrRemoveItem: <T>(arr: T[], targetItem: T, removeAll?: boolean) => T[];
export { arrRemoveItem };
