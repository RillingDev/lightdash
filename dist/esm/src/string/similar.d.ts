import { List } from "lodash";
/**
 * Returns strings similar to the input based its levenshtein distance to the values in the list given.
 *
 * @since 6.3.0
 * @category String
 * @param string String to check.
 * @param array Array of values to compare the string to.
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
declare const similar: (string: string, array: List<string>, returnFull?: boolean) => List<string> | Map<number, List<string>>;
export { similar };
//# sourceMappingURL=similar.d.ts.map