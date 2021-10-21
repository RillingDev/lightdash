import type { List } from "lodash";
import { indexOf, remove } from "lodash";

/**
 * Removes the first occurrence of an element from an array.
 * If the element does not exist in the array nothing is done.
 *
 * Note that the input array is being mutated.
 *
 * @since 2.8.0
 * @category Array
 * @param array Array to modify.
 * @param value The value to remove.
 * @returns The mutated array.
 * @example
 * const a = ["foo", "bar", "fizz", "bar"];
 * removeItem(a, "bar")
 * // => ["foo", "fizz", "bar"]
 *
 * const b = ["foo", "bar", "fizz", "bar"];
 * removeItem(b, "bazz")
 * // => ["foo", "bar", "fizz", "bar"]
 */
const pullFirst = <TValue>(
	array: List<TValue>,
	value: TValue
): List<TValue> => {
	const targetIndex = indexOf(array, value);
	remove(array, (_val, index) => index === targetIndex);
	return array;
};

export { pullFirst };
