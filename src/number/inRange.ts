/**
 * Checks if a number is in the given range
 *
 * @since 1.0.0
 * @param {number} val
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 */
const numberInRange = (val: number, min: number, max: number): boolean => val >= min && val <= max;

export default numberInRange;
