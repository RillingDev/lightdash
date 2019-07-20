import { List } from "lodash";
import { groupMapBy } from "../array/groupMapBy";
import { distance } from "./distance";

// noinspection SpellCheckingInspection
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
const similar = (
    str: string,
    collection: List<string>,
    returnFull = false
): List<string> | Map<number, List<string>> => {
    const result: Map<number, List<string>> = groupMapBy(
        collection,
        (value: string) => distance(str, value)
    );

    if (returnFull) {
        return result;
    }

    const lowestKey = Math.min(...result.keys());
    return result.get(lowestKey)!;
};

export { similar };
