import { arrMerge } from "./merge";

/**
 * Returns an array of all elements that exist in the first array and at least once in one of the other arrays.
 *
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr Array to check.
 * @param {...any[]} values Arrays to compare to.
 * @returns {any[]} Intersection of `arr` to `values`.
 * @example
 * arrIntersection([1, 2, 3], [1, "foo", 3])
 * // => [1, 3]
 *
 * arrIntersection([1, 2, 3], [100], [2, 0, 2])
 * // => [2]
 */
const arrIntersection = <T>(arr: T[], ...values: T[][]): T[] => {
    const valuesMerged = arrMerge(...values);

    return arr.filter(item => valuesMerged.includes(item));
};

export { arrIntersection };
