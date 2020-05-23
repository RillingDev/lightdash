import { indexOf, remove } from "lodash";
/**
 * Removes the first occurrence of an element from an array.
 *
 * Note: the input array is being mutated.
 *
 * @since 2.8.0
 * @category Array
 * @param collection The array to modify.
 * @param targetValue The value to remove.
 * @returns The mutated collection.
 * @example
 * const a = ["foo", "bar", "fizz", "bar"];
 * removeItem(a, "bar")
 * // a equals ["foo", "fizz", "bar"]
 */
const pullFirst = (collection, targetValue) => {
    const targetIndex = indexOf(collection, targetValue);
    remove(collection, (val, index) => index === targetIndex);
    return collection;
};
export { pullFirst };
//# sourceMappingURL=pullFirst.js.map