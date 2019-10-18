/**
 * Clamps a number in the range of safe integers.
 *
 * @memberof Number
 * @since 7.1.0
 * @param {number} val Value to use.
 * @returns {number} Value clamped into the range of safe integers.
 * @example
 * numSafe(99999999999999999)
 * // => Number.MAX_SAFE_INTEGER
 *
 * numSafe(-Infinity)
 * // => Number.MIN_SAFE_INTEGER
 */
declare const numSafe: (val: number) => number;
export { numSafe };
//# sourceMappingURL=safe.d.ts.map