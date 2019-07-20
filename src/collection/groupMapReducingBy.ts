import { forEach, List, ListIterator } from "lodash";

/**
 * Collects elements in an array into a an array of merged elements.
 *
 * @since 11.0.0
 * @param collection Collection to group.
 * @param keyProducer Function returning the key for the value.
 * @param initializer Function initializing a new mergable object.
 * @param reducer Consumer mutating the existing object with the new data.
 * @returns Grouped and merged map.
 * @example
 * groupMapReducingBy(
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
 *         return current;
 *     }
 * )
 * // => Map{"f": {count: 2, matches: ["foo", "fizz"]}, "b": {count: 2, matches: ["bar", "buzz"]}}
 */
const groupMapReducingBy = <T, TKey, TMerged>(
    collection: List<T>,
    keyProducer: ListIterator<T, TKey>,
    initializer: ListIterator<T, TMerged>,
    reducer: (current: TMerged, value: T, index: number, collection: List<T>) => TMerged
): Map<TKey, TMerged> => {
    const result = new Map<TKey, TMerged>();

    forEach(collection, (value, index) => {
        const key = keyProducer(value, index, collection);
        if (!result.has(key)) {
            result.set(key, initializer(value, index, collection));
        }

        result.set(key, reducer(result.get(key)!, value, index, collection));
    });

    return result;
};

export { groupMapReducingBy };
