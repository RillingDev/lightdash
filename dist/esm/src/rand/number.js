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
const randNumber = (min = 0, max = 1, float = false) => {
    const diff = max - min;
    if (diff === 0) {
        return min;
    }
    const rand = Math.random() * diff;
    if (float) {
        return min + rand;
    }
    return min + Math.floor((rand / diff) * (diff + 1));
};
export { randNumber };
//# sourceMappingURL=number.js.map