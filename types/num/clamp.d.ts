/**
 * Clamps a number in a given range.
 *
 * @function numClamp
 * @memberof Number
 * @since 1.0.0
 * @param {number} val
 * @param {number} min
 * @param {number} max
 * @returns {number}
 * @example
 * numClamp(5, 0, 10)
 * // => 5
 *
 * numClamp(-2, 0, 10)
 * // => 0
 *
 * numClamp(99, 0, 10)
 * // => 10
 */
declare const numClamp: (val: number, min: number, max: number) => number;
export default numClamp;
