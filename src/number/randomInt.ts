import numberRandomFloat from "./randomFloat";

/**
 * Return a random integer number in the range
 *
 * @since 1.0.0
 * @param {number} [min=0]
 * @param {number} [max=100]
 * @returns {number}
 * @example
 * numberRandomInt(0,1) // 1
 * numberRandomInt(0,100) // 54
 * numberRandomInt(-10,10) // 2
 */
const numberRandomInt = (min: number = 0, max: number = 1): number => Math.floor(
    numberRandomFloat(min, max) /
    (max - min) * (max - min + 1));

export default numberRandomInt;
