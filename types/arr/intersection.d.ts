/**
 * Returns an array of all elements that exist in the first array and at least once in one of the other arrays.
 *
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr
 * @param {...any[]} values
 * @returns {any[]}
 * @example
 * arrIntersection([1, 2, 3], [1, "foo", 3])
 * // => [1, 3]
 *
 * arrIntersection([1, 2, 3], ["foo"], [2, 0, 2])
 * // => [2]
 */
declare const arrIntersection: <T>(arr: T[], ...values: any[]) => T[];
export { arrIntersection };
