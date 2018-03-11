/**
 * Checks if a number is in the given range.
 *
 * @function numberInRange
 * @memberof Number
 * @since 1.0.0
 * @param {number} val
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 * @example
 * // returns true
 * numberInRange(0.5, 0, 1)
 * numberInRange(1, 0, 1)
 * numberInRange(0, -5, 5)
 *
 * @example
 * // returns false
 * numberInRange(-1, 0, 5)
 * numberInRange(10, 0, 5)
 */
const numberInRange = (val: number, min: number, max: number): boolean =>
    val >= min && val <= max;

export default numberInRange;
