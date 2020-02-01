import { List } from "lodash";
/**
 * Returns a new collection with instances of the given item removed.
 *
 * @since 2.8.0
 * @category Array
 * @param collection Collection to use.
 * @param targetValue Item to remove.
 * @param removeAll If all occurrences should be removed, otherwise just the first occurrence will.
 * @returns Collection with the item removed.
 * @example
 * removeItem(["foo", "bar", "fizz", "bar"], "bar")
 * // => ["foo", "fizz"]
 *
 * removeItem(["foo", "bar", "fizz", "bar"], "bar", false)
 * // => ["foo", "fizz", "bar"]
 */
declare const removeItem: <T>(collection: List<T>, targetValue: T, removeAll?: boolean) => List<T>;
export { removeItem };
//# sourceMappingURL=removeItem.d.ts.map