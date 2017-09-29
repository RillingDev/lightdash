/**
 * Clamps a number in a range
 *
 * @param {number} val
 * @param {number} min
 * @param {number} max
 * @returns {number}
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
