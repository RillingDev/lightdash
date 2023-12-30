import { groupMapReducingBy } from "./groupMapReducingBy.js";
import type { ArrayIterator } from "./lib/ArrayIterator.js";

/**
 * Counts the values of an array into a map,
 * with the key being based on a key mapper, and the value being the occurrences
 * of the key mapper result in the initial array.
 *
 * @since 12.0.0
 * @category Array
 * @see groupMapBy
 * @see groupMapReducingBy
 * @param array Array to count.
 * @param keyMapper Function to use for key generation.
 * @returns Count map.
 * @example
 * countMapBy([1, 2, 4, 2, 4, 4], val => val)
 * // => Map{1: 1, 2: 2, 4: 3}
 */
export const countMapBy = <TValue, UKey>(
	array: readonly TValue[],
	keyMapper: ArrayIterator<TValue, UKey>,
): Map<UKey, number> =>
	groupMapReducingBy(
		array,
		keyMapper,
		() => 0,
		(current) => current + 1,
	);
