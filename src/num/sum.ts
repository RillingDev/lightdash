/**
 * Returns the sum of an array of numbers.
 *
 * @function numSum
 * @memberof Number
 * @since 5.0.0
 * @param {number[]} arr
 * @returns {number}
 * @example
 * numSum([1, 2.5, 3.3])
 * // => 6.8
 */
const numSum = (arr: number[]): number => arr.reduce((a, b) => a + b);

export default numSum;
