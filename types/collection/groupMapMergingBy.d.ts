import { ListIterator } from "lodash";
/**
 * Collects elements in an array into a an array of merged elements.
 *
 * @since 11.0.0
 * @param collection Collection to group.
 * @param keyFn Function returning the key for the value.
 * @param initializerFn Function initializing a new mergable object.
 * @param mergeMutator Consumer mutating the existing object with the new data.
 * @returns Grouped and merged map.
 * @example
 * groupMapMergingBy(
 *     ["foo", "bar", "fizz", "buzz"],
 *     val => val.startsWith("f"),
 *     () => {
 *        return {
 *            count: 0,
 *            matches: []
 *        };
 *     },
 *     (current, val) => {
 *         current.count++;
 *         current.matches.push(val);
 *     }
 * )
 * // => Map{"f": {count: 2, matches: ["foo", "fizz"]}, "b": {count: 2, matches: ["bar", "buzz"]}}
 */
declare const groupMapMergingBy: <T, TKey, TMerged>(collection: ArrayLike<T>, keyFn: ListIterator<T, TKey>, initializerFn: ListIterator<T, TMerged>, mergeMutator: (current: TMerged, value: T, index: number, collection: ArrayLike<T>) => void) => Map<TKey, TMerged>;
export { groupMapMergingBy };
