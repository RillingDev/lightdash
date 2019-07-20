import { List, ListIterator, merge } from "lodash";
import { groupMapReducingBy } from "./groupMapReducingBy";

/**
 * Collects the values of an array in a map as array values,
 * using the return value of the function as key.
 *
 * @since 6.1.0
 * @param collection Collection to group.
 * @param keyFn Function to use for grouping.
 * @returns Grouped map.
 * @example
 * groupMapBy([1, 2, 3, 4, 5], val => val % 2)
 * // => Map{0: [2, 4], 1: [1, 3, 5]}
 */
const groupMapBy = <T, TKey>(
    collection: List<T>,
    keyFn: ListIterator<T, TKey>
): Map<TKey, T[]> =>
    groupMapReducingBy(
        collection,
        keyFn,
        () => <T[]>[],
        (current, value) => [...current, value]
    );

export { groupMapBy };
