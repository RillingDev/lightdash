/**
 * Returns strings similar to the input based on the list given.
 *
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
 * // => Map<number, string[]>{1: ["commit"], 3: ["init"], 5: ["push"]}
 */
declare const strSimilar: (str: string, list: string[], returnFull?: boolean) => string[] | Map<number, string[]>;
export { strSimilar };
