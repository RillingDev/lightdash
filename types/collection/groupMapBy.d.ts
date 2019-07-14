import { ListIterator } from "lodash";
/**
 * Collects the values of an array in a map as array values,
 * using the return value of the function as key.
 *
 * @since 6.1.0
 * @param collection Array to collect.
 * @param iteratee Function to use for collection.
 * @returns Collected map.
 * @example
 * groupMapBy([1, 2, 3, 4, 5], val => val % 2)
 * // => Map{0: [2, 4], 1: [1, 3, 5]}
 */
declare const groupMapBy: <T, TResult>(collection: ArrayLike<T>, iteratee: ListIterator<T, TResult>) => Map<TResult, T[]>;
export { groupMapBy };
