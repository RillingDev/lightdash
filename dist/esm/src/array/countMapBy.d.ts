import { List, ListIterator } from "lodash";
/**
 * Counts the values of an array in a map,
 * using the return value of the function as key.
 *
 * @since 12.0.0
 * @category Array
 * @param array Array to count.
 * @param keyMapper Function to use for key generation.
 * @returns Count map.
 * @example
 * countMapBy([1, 2, 4, 2, 4, 4], val => val)
 * // => Map{1: 1, 2: 2, 4: 3}
 */
declare const countMapBy: <TValue, UKey>(array: List<TValue>, keyMapper: ListIterator<TValue, UKey>) => Map<UKey, number>;
export { countMapBy };
//# sourceMappingURL=countMapBy.d.ts.map