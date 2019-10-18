import { isIndex } from "../is/_index";
/**
 * Creates an array of elements split into sub arrays by size.
 *
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr Array to chunk.
 * @param {number} chunk Size of the chunks.
 * @returns {any[]} Chunked array.
 * @example
 * arrChunk([1, 2, 3, 4, 5, 6], 2)
 * // => [[1, 2], [3, 4], [5, 6]]
 *
 * arrChunk([1, 2, 3, 4, 5], 3)
 * // => [[1, 2, 3], [4, 5]]
 */
const arrChunk = (arr, chunk) => {
    if (!isIndex(chunk) || chunk === 0) {
        return [];
    }
    const chunked = [];
    for (let i = 0; i < arr.length; i += chunk) {
        chunked.push(arr.slice(i, i + chunk));
    }
    return chunked;
};
export { arrChunk };
//# sourceMappingURL=chunk.js.map