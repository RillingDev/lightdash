import { groupMapReducingBy } from "./groupMapReducingBy.js";
import type { ArrayIterator } from "./lib/ArrayIterator.js";

/**
 * Groups the elements of an array into a map,
 * with the key being based on a key mapper, and the value being the values
 * for the same key mapper result.
 *
 * @since 6.1.0
 * @category Array
 * @see groupMapReducingBy
 * @param array Array to group.
 * @param keyMapper Function returning the key for the value.
 * @returns Grouped map.
 * @example
 * groupMapBy([1, 2, 3, 4, 5], val => val % 2)
 * // => Map{0: [2, 4], 1: [1, 3, 5]}
 */
export const groupMapBy = <TValue, UKey>(
	array: ReadonlyArray<TValue>,
	keyMapper: ArrayIterator<TValue, UKey>
): Map<UKey, TValue[]> =>
	groupMapReducingBy(
		array,
		keyMapper,
		() => [] as TValue[],
		(current, value) => current.concat(value)
	);
