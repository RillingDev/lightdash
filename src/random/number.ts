/**
 * Return a random float or integer number in the given range.
 *
 * @function randomNumber
 * @memberof Random
 * @since 3.0.0
 * @param {number} [min=0]
 * @param {number} [max=1]
 * @param {boolean} [floating=true]
 * @returns {number}
 * @example
 * randomNumber()               //=> 0.56832138
 * randomNumber(0, 100)         //=> 54.2135123
 * randomNumber(2, 10, false)   //=> 5
 */
const randomNumber = (
    min: number = 0,
    max: number = 1,
    floating: boolean = true
): number => {
    const diff = max - min;

    if (diff !== 0) {
        const rand = min + Math.random() * diff;

        return floating ? rand : Math.floor(rand / diff * (diff + 1));
    } else {
        return min;
    }
};

export default randomNumber;
