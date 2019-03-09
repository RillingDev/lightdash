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
const arrMerge = <T>(...values: T[][]): T[] => {
    if (values.length === 0) {
        return [];
    }
    const first = values[0];
    if (values.length === 1) {
        return first;
    }

    return first.concat(...values.slice(1));
};

export { arrMerge };
