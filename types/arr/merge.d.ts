/**
 * Merges an arbitrary amount of arrays.
 *
 * @memberof Array
 * @since 10.1.0
 * @param {...any[]} values Arrays to merge.
 * @returns {any[]} merged array.
 * @example
 * arrMerge([1, 2, 3], [1, 6, 3])
 * // => [1, 2, 3, 1, 6, 3]
 *
 * arrDifference([1, 2, 3], [0], [2, 0, 2])
 * // => [1, 2, 3, 0, 2, 0, 2]
 */
declare const arrMerge: <T>(...values: T[][]) => T[];
export { arrMerge };
