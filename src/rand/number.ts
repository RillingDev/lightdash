/**
 * Return a random float or integer number in the given range.
 *
 * @function randNumber
 * @memberof Random
 * @since 3.0.0
 * @param {number} [min=0]
 * @param {number} [max=1]
 * @param {boolean} [floating=true]
 * @returns {number}
 * @example
 * randNumber()               //=> 0.56832138
 * randNumber(0, 100)         //=> 54.2135123
 * randNumber(2, 10, false)   //=> 5
 */
const randNumber = (
    min: number = 0,
    max: number = 1,
    floating: boolean = true
): number => {
    const diff = max - min;

    if (diff === 0) {
        return min;
    }

    const rand = min + Math.random() * diff;

    return floating ? rand : Math.floor(rand / diff * (diff + 1));
};

export default randNumber;