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
declare const arrChunk: <T>(arr: T[], chunk: number) => T[][];
export default arrChunk;
