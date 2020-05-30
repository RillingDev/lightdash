import { indexOf, List, remove } from "lodash";

/**
 * Removes the first occurrence of an element from an array.
 *
 * Note: the input array is being mutated.
 *
 * @since 2.8.0
 * @category Array
 * @param array Array to modify.
 * @param value The value to remove.
 * @returns The mutated collection.
 * @example
 * const a = ["foo", "bar", "fizz", "bar"];
 * removeItem(a, "bar")
 * // a equals ["foo", "fizz", "bar"]
 */
const pullFirst = <TValue>(
    array: List<TValue>,
    value: TValue
): List<TValue> => {
    const targetIndex = indexOf(array, value);
    remove(array, (val, index) => index === targetIndex);
    return array;
};

export { pullFirst };
