/**
 * Checks if a number is in the given range.
 *
 * @function numInRange
 * @memberof Number
 * @since 1.0.0
 * @param {number} val
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 * @example
 * // returns true
 * numInRange(0.5, 0, 1)
 * numInRange(1, 0, 1)
 * numInRange(0, -5, 5)
 *
 * @example
 * // returns false
 * numberInRange(-1, 0, 5)
 * numberInRange(10, 0, 5)
 */
const numInRange = (val: number, min: number, max: number): boolean =>
    val >= min && val <= max;

export default numInRange;
