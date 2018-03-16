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
 * arrChunk([1, 2, 3, 4, 5, 6], 2)
 * // => [[1, 2], [3, 4], [5, 6]]
 *
 * arrChunk([1, 2, 3, 4, 5], 3)
 * // => [[1, 2, 3], [4, 5]]
 */
const arrChunk = <T>(arr: T[], chunk: number): T[][] => {
    if (chunk < 1) {
        return [];
    }

    const result: T[][] = [];

    for (let i = 0; i < arr.length - 1; i += chunk) {
        result.push(arr.slice(i, i + chunk));
    }

    return result;
};

export default arrChunk;
