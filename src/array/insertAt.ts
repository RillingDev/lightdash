/**
 * Inserts value(s) at the given position.
 * If the index is equal or higher the array length, the value(s) will appended.
 * If the index is less than 0, the value(s) will prepended.
 *
 * Note: the input array is being mutated.
 *
 * @since 12.1.0
 * @category Array
 * @param collection Collection to insertAt to.
 * @param index Index to start inserting.
 * @param values Value(s) to insertAt.
 * @returns Collection.
 * @example
 * insertAt(["foo", "fizz"], 1, "bar")
 * // => ["foo", "bar", "fizz"]
 */
const insertAt = <TValue, UKey>(
    collection: TValue[],
    index: number,
    ...values: TValue[]
): TValue[] => {
    collection.splice(index, 0, ...values);
    return collection;
};

export { insertAt };
