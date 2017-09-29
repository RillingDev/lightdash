import forTimes from "../for/times";

/**
 * Chunks an array
 *
 * @param {any[]} arr
 * @param {number} chunk
 * @returns {any[]}
 */
const arrChunk = (arr: any[], chunk: number): any[] => {
    const result: any[] = [];

    if (chunk <= 0) {
        throw new Error("Cannot create chunks smaller than 1");
    }

    forTimes(0, arr.length, chunk, (index) => {
        result.push(arr.slice(index, index + chunk));
    });

    return result;
};

export default arrChunk;
