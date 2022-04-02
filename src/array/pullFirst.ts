/**
 * Removes the first occurrence of an element from an array.
 * If the element does not exist in the array, nothing is done.
 *
 * Note that the input array is being mutated.
 *
 * @since 2.8.0
 * @category Array
 * @see lodash.pullAt
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
export const pullFirst = <TValue>(array: TValue[], value: TValue): TValue[] => {
	if (!array.includes(value)) {
		return array;
	}

	const firstIndex = array.indexOf(value);
	array.splice(firstIndex, 1);
	return array;
};
