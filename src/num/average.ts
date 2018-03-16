import numSum from "./sum";

/**
 * Returns the average of an array of numbers
 *
 * @function numAverage
 * @memberof Number
 * @since 5.0.0
 * @param {number[]} arr
 * @returns {number}
 * @example
 * // returns 2.2666
 * numAverage([1, 2.5, 3.3])
 */
const numAverage = (arr: number[]): number => numSum(arr) / arr.length;

export default numAverage;
