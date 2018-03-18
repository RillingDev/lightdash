import numAverage from "./average";

/**
 * Returns the median of an array of numbers.
 *
 * @function numMedian
 * @memberof Number
 * @since 5.0.0
 * @param {number[]} arr
 * @returns {number}
 * @example
 * numMedian([1, 2.5, 3.3])
 * // => 2.5
 *
 * numMedian([1, 2, 4, 5])
 * // => 3
 */
const numMedian = (arr: number[]): number => {
    const arrLengthHalf = arr.length / 2;

    return arr.length % 2 === 0
        ? arr[arrLengthHalf]
        : numAverage(arr.slice(Math.floor(arrLengthHalf), 2));
};

export default numMedian;
