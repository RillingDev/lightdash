import numAverage from "./average";

/**
 * Returns the median of an array of numbers
 *
 * @function numMedian
 * @memberof Number
 * @since 5.0.0
 * @param {number[]} arr
 * @returns {number}
 * @example
 * // returns 2.5
 * numAverage([1, 2.5, 3.3])
 *
 * @example
 * // returns 3
 * numAverage([1, 2, 4, 5])
 */
const numMedian = (arr: number[]): number => {
    const arrLengthHalf = arr.length / 2;

    return arr.length % 2 === 0
        ? arr[arrLengthHalf]
        : numAverage(arr.slice(Math.floor(arrLengthHalf), 2));
};

export default numAverage;
