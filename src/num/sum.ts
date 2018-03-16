/**
 * Returns the sum of an array of numbers
 *
 * @function numSum
 * @memberof Number
 * @since 5.0.0
 * @param {number[]} arr
 * @returns {number}
 * @example
 * // returns 6.8
 * numSum([1, 2.5, 3.3])
 */
const numSum = (arr: number[]): number => arr.reduce((a, b) => a + b);

export default numSum;
