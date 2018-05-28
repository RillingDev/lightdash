import { arrCount } from "./count";

/**
 * Returns an array of all elements that exist in the first array, but not any others.
 *
 * @function arrDifference
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr
 * @param {...any[]} values
 * @returns {any[]}
 * @example
 * arrDifference([1, 2, 3], [1, "foo", 3])
 * // => [2]
 *
 * arrDifference([1, 2, 3], ["foo"], [2, 0, 2])
 * // => [1, 3]
 */
const arrDifference = <T>(arr: T[], ...values: any[]): T[] => {
    const valuesCounted = arrCount(<any[]>[].concat(...values));

    return arr.filter(item => !valuesCounted.has(item));
};

export { arrDifference };
