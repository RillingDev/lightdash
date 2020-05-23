import { List } from "lodash";
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
declare const pullFirst: <TValue>(collection: List<TValue>, targetValue: TValue) => List<TValue>;
export { pullFirst };
//# sourceMappingURL=pullFirst.d.ts.map