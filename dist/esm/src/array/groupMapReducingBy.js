import { forEach } from "lodash";
/**
 * Collects elements in an array into a an array of merged elements.
 *
 * @since 11.0.0
 * @category Array
 * @param array Array to group.
 * @param keyMapper Function returning the key for the value.
 * @param initializer Function initializing a new mergable object.
 * @param reducer Consumer mutating the existing object with the new data.
 * @returns Grouped and merged map.
 * @example
 * groupMapReducingBy(
 *     ["foo", "bar", "fizz", "buzz"],
 *     val => val.charAt(0),
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
const groupMapReducingBy = (array, keyMapper, initializer, reducer) => {
    const result = new Map();
    forEach(array, (value, index) => {
        const key = keyMapper(value, index, array);
        if (!result.has(key)) {
            result.set(key, initializer(value, index, array));
        }
        result.set(key, reducer(result.get(key), value, index, array));
    });
    return result;
};
export { groupMapReducingBy };
//# sourceMappingURL=groupMapReducingBy.js.map