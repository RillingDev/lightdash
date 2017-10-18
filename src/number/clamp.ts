/**
 * Clamps a number in a range
 *
 * @since 1.0.0
 * @param {number} val
 * @param {number} min
 * @param {number} max
 * @returns {number}
 * @example
 * //returns 5
 * numberClamp(5,0,10)
 *
 * @example
 * //returns 0
 * numberClamp(-2,0,10)
 *
 * @example
 * //returns 10
 * numberClamp(99,0,10)
 */
const numberClamp = (val: number, min: number, max: number): number => {
    if (val < min) {
        return min;
    } else if (val > max) {
        return max;
    } else {
        return val;
    }
};

export default numberClamp;
