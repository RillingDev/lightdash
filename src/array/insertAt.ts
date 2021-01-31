/**
 * Inserts the value(s) at the given position.
 * If the index is equal or higher than the array length, the value(s) will be appended.
 * If the index is less than 0, the value(s) will be prepended.
 *
 * Note that the input array is being mutated.
 *
 * @since 12.1.0
 * @category Array
 * @param array Array to insertAt to.
 * @param index Index to start inserting.
 * @param values Value(s) to insertAt.
 * @returns Collection.
 * @example
 * insertAt(["foo", "fizz"], 1, "bar")
 * // => ["foo", "bar", "fizz"]
 */
const insertAt = <TValue>(
    array: TValue[],
    index: number,
    ...values: TValue[]
): TValue[] => {
    array.splice(index, 0, ...values);
    return array;
};

export { insertAt };
