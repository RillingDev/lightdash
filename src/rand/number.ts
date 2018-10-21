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
const randNumber = (
    min: number = 0,
    max: number = 1,
    float: boolean = false
): number => {
    const diff = max - min;

    if (diff === 0) {
        return min;
    }

    const rand = Math.random() * diff;

    return min + (float ? rand : Math.floor((rand / diff) * (diff + 1)));
};

export { randNumber };
