/**
 * Return a random number in the given range.
 *
 * @memberof Random
 * @since 3.0.0
 * @param {number} [min=0] inclusive minimum
 * @param {number} [max=1] inclusive maximum
 * @param {boolean} [float=false]
 * @returns {number}
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
