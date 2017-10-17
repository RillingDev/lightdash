import forTimes from "../for/times";

/**
 * Chunks an array
 *
 * @param {any[]} arr
 * @param {number} chunk
 * @returns {any[]}
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
