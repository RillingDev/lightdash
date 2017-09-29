/**
 * Checks if a number is in the given range
 *
 * @param {number} val
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 */
const numberIsInRange = (val: number, min: number, max: number): boolean => val >= min && val <= max;

export default numberIsInRange;
