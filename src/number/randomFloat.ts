/**
 * Return a random float number in the range
 *
 * @param {number} [min=0]
 * @param {number} [max=1]
 * @returns {number}
 */
const numberRandomFloat = (min: number = 0, max: number = 1): number => min + Math.random() * (max - min);

export default numberRandomFloat;
