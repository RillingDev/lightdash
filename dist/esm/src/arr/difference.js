import { arrMerge } from "./merge";
/**
 * Returns an array of all elements that exist in the first array, but not any others.
 *
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr Array to check.
 * @param {...any[]} values Arrays to compare to.
 * @returns {any[]} Difference of `arr` to `values`.
 * @example
 * arrDifference([1, 2, 3], [1, "foo", 3])
 * // => [2]
 *
 * arrDifference([1, 2, 3], [100], [2, 0, 2])
 * // => [1, 3]
 */
const arrDifference = (arr, ...values) => {
    const valuesMerged = arrMerge(...values);
    return arr.filter(item => !valuesMerged.includes(item));
};
export { arrDifference };
//# sourceMappingURL=difference.js.map