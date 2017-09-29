import numberRandomFloat from "./randomFloat";

/**
 * Return a random integer number in the range
 *
 * @param {number} [min=0]
 * @param {number} [max=100]
 * @returns {number}
 */
const numberRandomInt = (min: number = 0, max: number = 1): number => Math.floor(
    numberRandomFloat(min, max) /
    (max - min) * (max - min + 1));

export default numberRandomInt;
