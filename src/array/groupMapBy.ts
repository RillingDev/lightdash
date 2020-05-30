import { concat, List, ListIterator } from "lodash";
import { groupMapReducingBy } from "./groupMapReducingBy";

/**
 * Collects the values of an array in a map as array values,
 * using the return value of the function as key.
 *
 * @since 6.1.0
 * @category Array
 * @param array Array to group.
 * @param keyMapper Function to use for grouping.
 * @returns Grouped map.
 * @example
 * groupMapBy([1, 2, 3, 4, 5], val => val % 2)
 * // => Map{0: [2, 4], 1: [1, 3, 5]}
 */
const groupMapBy = <TValue, UKey>(
    array: List<TValue>,
    keyMapper: ListIterator<TValue, UKey>
): Map<UKey, TValue[]> =>
    groupMapReducingBy(
        array,
        keyMapper,
        () => [] as TValue[],
        (current, value) => concat(current, value)
    );

export { groupMapBy };
