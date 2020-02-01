import { filter, indexOf } from "lodash";
import { removeIndex } from "./removeIndex";
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
const removeItem = (collection, targetValue, removeAll = true) => removeAll
    ? filter(collection, value => value !== targetValue)
    : removeIndex(collection, indexOf(collection, targetValue));
export { removeItem };
//# sourceMappingURL=removeItem.js.map