import { groupMapBy } from "../array/groupMapBy";
import { distance } from "./distance";
// Noinspection SpellCheckingInspection
/**
 * Returns strings similar to the input based its levenshtein distance to the values in the list given.
 *
 * @since 6.3.0
 * @memberOf String
 * @param str String to check.
 * @param collection Array of values to compare the string to.
 * @param returnFull If the full map should be returned, rather than just the closest matches.
 * @returns Array of the closest matches, or the map if `returnFull` is true.
 * @example
 * similar("Fob", ["Foo", "Bar"])
 * // => ["Foo"]
 *
 * similar("cmmit", ["init", "commit", "push"])
 * // => ["commit"]
 *
 * similar("Kitten", ["Sitten", "Sitting", "Bitten"])
 * // => ["Sitten", "Bitten"]
 *
 * similar("cmmit", ["init", "commit", "push"], true)
 * // => Map<number, string[]>{1: ["commit"], 3: ["init"], 5: ["push"]}
 */
const similar = (str, collection, returnFull = false) => {
    const result = groupMapBy(collection, (value) => distance(str, value));
    if (returnFull) {
        return result;
    }
    const lowestKey = Math.min(...result.keys());
    return result.get(lowestKey);
};
export { similar };
