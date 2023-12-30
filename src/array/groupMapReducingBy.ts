import type { ArrayIterator } from "./lib/ArrayIterator.js";

/**
 * Groups the elements of an array into a map,
 * with the key being based on a key mapper, and the value being the values
 * for the same key mapper result being reduced.
 *
 * @since 11.0.0
 * @category Array
 * @see groupMapBy
 * @see countMapBy
 * @param array Array to group.
 * @param keyMapper Function returning the key for the value.
 * @param initializer Function initializing a new reduction result object.
 * @param reducer Consumer creating a new reduction result object based on the previous result and the new data.
 * @returns Grouped and reduced map.
 * @example
 * groupMapReducingBy(
 *     ["foo", "bar", "fizz", "buzz"],
 *     val => val.charAt(0),
 *     () => {
 *        return {
 *            count: 0,
 *            matches: []
 *        };
 *     },
 *     (current, val) => {
 *         current.count++;
 *         current.matches.push(val);
 *         return current;
 *     }
 * )
 * // => Map{"f": {count: 2, matches: ["foo", "fizz"]}, "b": {count: 2, matches: ["bar", "buzz"]}}
 */
export const groupMapReducingBy = <TValue, UKey, VReduced>(
	array: readonly TValue[],
	keyMapper: ArrayIterator<TValue, UKey>,
	initializer: ArrayIterator<TValue, VReduced>,
	reducer: (
		current: VReduced,
		value: TValue,
		index: number,
		collection: readonly TValue[],
	) => VReduced,
): Map<UKey, VReduced> => {
	const result = new Map<UKey, VReduced>();

	array.forEach((value, index) => {
		const key = keyMapper(value, index, array);
		if (!result.has(key)) {
			result.set(key, initializer(value, index, array));
		}

		result.set(key, reducer(result.get(key)!, value, index, array));
	});

	return result;
};
