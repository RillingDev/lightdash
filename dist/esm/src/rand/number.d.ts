/**
 * Return a random number in the given range.
 *
 * @memberof Random
 * @since 3.0.0
 * @param {number} [min=0] Inclusive minimum value.
 * @param {number} [max=1] Inclusive maximum value.
 * @param {boolean} [float=false] If the value should be a float.
 * @returns {number} Random number
 * @example
 * randNumber()
 * // => 1
 *
 * randNumber(0, 100)
 * // => 54
 *
 * randNumber(2, 10, true)
 * // => 6.23132496
 */
declare const randNumber: (min?: number, max?: number, float?: boolean) => number;
export { randNumber };
//# sourceMappingURL=number.d.ts.map