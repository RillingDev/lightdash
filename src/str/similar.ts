import { arrCollect } from "../arr/collect";
import { strDistance } from "./distance";

// noinspection SpellCheckingInspection
/**
 * Returns strings similar to the input based its distance to the values in the list given.
 *
 * @since 6.3.0
 * @param str String to check.
 * @param list Array of values to compare the string to.
 * @param [returnFull=false] If the full map should be returned, rather than just the closest matches.
 * @returns Array of the closest matches, or the map if `returnFull` is true.
 * @example
 * strSimilar("Fob", ["Foo", "Bar"])
 * // => ["Foo"]
 *
 * strSimilar("cmmit", ["init", "commit", "push"])
 * // => ["commit"]
 *
 * strSimilar("Kitten", ["Sitten", "Sitting", "Bitten"])
 * // => ["Sitten", "Bitten"]
 *
 * strSimilar("cmmit", ["init", "commit", "push"], true)
 * // => Map<number, string[]>{1: ["commit"], 3: ["init"], 5: ["push"]}
 */
const strSimilar = (
    str: string,
    list: string[],
    returnFull = false
): string[] | Map<number, string[]> => {
    const result: Map<number, string[]> = arrCollect(list, (val: string) =>
        strDistance(str, val)
    );

    if (!returnFull) {
        return result.get(Math.min(...result.keys()))!;
    }

    return result;
};

export { strSimilar };
