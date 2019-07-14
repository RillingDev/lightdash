import { filter, List } from "lodash";

/**
 * Returns an array with every n-th item from the input array.
 *
 * @since 1.0.0
 * @param collection Array to use.
 * @param n Step to use.
 * @returns Stepped array.
 * @example
 * step([1, 2, 3, 4, 5, 6], 2)
 * // => [1, 3, 5]
 */
const step = <T>(collection: List<T>, n: number): List<T> =>
    filter(collection, (value, index) => index % n === 0);

export { step };
