import forTimes from "../for/times";

/**
 * Creates an array of elements split into groups by size.
 *
 * @function arrChunk
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr
 * @param {number} chunk
 * @returns {any[]}
 * @example
 * // returns [[1, 2], [3, 4], [5, 6]]
 * arrChunk([1, 2, 3, 4, 5, 6], 2)
 *
 * @example
 * // returns [[1, 2, 3], [4, 5]]
 * arrChunk([1, 2, 3, 4, 5], 3)
 */
const arrChunk = <T>(arr: T[], chunk: number): Array<Array<T>> => {
    if (chunk < 1) {
        return [];
    } else {
        const result: Array<Array<T>> = [];

        forTimes(0, arr.length - 1, chunk, (index: number) => {
            result.push(arr.slice(index, index + chunk));
        });

        return result;
    }
};

export default arrChunk;
