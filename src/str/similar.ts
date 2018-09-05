import { arrCollect } from "../arr/collect";
import { strDistance } from "./distance";

// noinspection SpellCheckingInspection
/**
 * Returns strings similar to the input based on the list given.
 *
 * @function strSimilar
 * @memberof String
 * @since 6.3.0
 * @param {string} str
 * @param {Array<string>} list
 * @param {boolean} [returnFull=false]
 * @returns {Array<string>|Map<number,string[]>}
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
 * // => Map<number, string[]>{"1": ["commit"], "3": ["init"], "5": ["push"]}
 */
const strSimilar = (
    str: string,
    list: string[],
    returnFull = false
): string[] | Map<number, string[]> => {
    const result: Map<number, string[]> = arrCollect(list, (val: string) =>
        strDistance(str, val)
    );

    return returnFull
        ? result
        : <string[]>result.get(Math.min(...result.keys()));
};

export { strSimilar };
