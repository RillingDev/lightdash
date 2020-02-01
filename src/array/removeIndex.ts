import { filter, List } from "lodash";

/**
 * Returns a new array with the item at the given index removed.
 *
 * @since 2.8.0
 * @category Array
 * @param collection Collection to use.
 * @param targetIndex Index to remove.
 * @returns Collection with the index removed.
 * @example
 * removeIndex(["foo", "bar", "fizz"], 1)
 * // => ["foo", "fizz"]
 */
const removeIndex = <T>(collection: List<T>, targetIndex: number): T[] =>
    filter(collection, (value, index) => index !== targetIndex);

export { removeIndex };
