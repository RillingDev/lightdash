/**
 * Clamps a number in the range of safe integers.
 *
 * @since 7.1.0
 * @param val Value to use.
 * @returns Value clamped into the range of safe integers.
 * @example
 * numSafe(99999999999999999)
 * // => Number.MAX_SAFE_INTEGER
 *
 * numSafe(-Infinity)
 * // => Number.MIN_SAFE_INTEGER
 */
declare const numSafe: (val: number) => number;
export { numSafe };
