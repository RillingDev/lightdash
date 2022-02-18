/**
 * Inserts the value(s) at the given position.
 * If the index is equal or higher than the array length, the value(s) will be appended.
 * If the index is less than 0, the value(s) will be prepended.
 *
 * Note that the input array is being mutated.
 *
 * @since 12.1.0
 * @category Array
 * @see lodash.pullAt
 * @param array Array to modify.
 * @param index Index to insert at.
 * @param values Value(s) to insert.
 * @returns The mutated array.
 * @example
 * const a = ["foo", "fizz"];
 * insertAt(a, 1, "bar")
 * // => ["foo", "bar", "fizz"]
 *
 * const b = ["foo", "fizz"];
 * insertAt(b, 1, "bar", "bazz"))
 * // => ["foo", "bar", "fizz", "bazz"]
 *
 * const c = ["foo", "fizz"];
 * insertAt(c, 999, "bar"))
 * // => ["foo", "fizz", "bar"]
 *
 * const d = ["foo", "fizz"];
 * insertAt(d, -999, "bar"))
 * // => ["bar", "foo", "fizz"]
 */
export const insertAt = <TValue>(
	array: TValue[],
	index: number,
	...values: TValue[]
): TValue[] => {
	array.splice(index, 0, ...values);
	return array;
};
