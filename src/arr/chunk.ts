import forTimes from "../for/times";

/**
 * Chunks an array
 *
 * @since 2.0.0
 * @param {any[]} arr
 * @param {number} chunk
 * @returns {any[]}
 * @example
 * //returns [[1,2],[3,4],[5,6]]
 * arrChunk([1,2,3,4,5,6],2)
 *
 * @example
 * //returns [[1,2,3],[4,5]]
 * arrChunk([1,2,3,4,5],3)
 */
const arrChunk = (arr: any[], chunk: number): any[] => {
    if (chunk < 1) {
        return [];
    } else {
        const result: any[] = [];

        forTimes(0, arr.length, chunk, (index) => {
            result.push(arr.slice(index, index + chunk));
        });

        return result;
    }
};

export default arrChunk;
