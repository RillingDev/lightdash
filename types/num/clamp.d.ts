/**
 * Clamps a number in a given range.
 *
 * @memberof Number
 * @since 1.0.0
 * @param {number} val Value to clamp
 * @param {number} min Inclusive minimum value.
 * @param {number} max Inclusive maximum value.
 * @returns {number} Value clamped into the range given.
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
export { numClamp };
