import type { List } from "lodash";
import { filter } from "lodash";

/**
 * Returns a new array with every n-th item from the input array.
 *
 * @since 1.0.0
 * @category Array
 * @param array Array to use.
 * @param stepSize Step to use.
 * @returns Stepped collection.
 * @example
 * step([1, 2, 3, 4, 5, 6], 2)
 * // => [1, 3, 5]
 */
const step = <TValue>(array: List<TValue>, stepSize: number): List<TValue> =>
    filter(array, (_value, index) => index % stepSize === 0);

export { step };
