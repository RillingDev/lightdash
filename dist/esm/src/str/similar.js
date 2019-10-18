import { arrCollect } from "../arr/collect";
import { strDistance } from "./distance";
// Noinspection SpellCheckingInspection
/**
 * Returns strings similar to the input based its distance to the values in the list given.
 *
 * @memberof String
 * @since 6.3.0
 * @param {string} str String to check.
 * @param {Array<string>} list Array of values to compare the string to.
 * @param {boolean} [returnFull=false] If the full map should be returned, rather than just the closest matches.
 * @returns {Array<string>|Map<number,string[]>} Array of the closest matches, or the map if `returnFull` is true.
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
const strSimilar = (str, list, returnFull = false) => {
    const result = arrCollect(list, (val) => strDistance(str, val));
    if (!returnFull) {
        return result.get(Math.min(...result.keys()));
    }
    return result;
};
export { strSimilar };
//# sourceMappingURL=similar.js.map