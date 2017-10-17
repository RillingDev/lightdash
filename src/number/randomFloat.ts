/**
 * Return a random float number in the range
 *
 * @since 1.0.0
 * @param {number} [min=0]
 * @param {number} [max=1]
 * @returns {number}
 * @example
 * numberRandomFloat(0,1) // 0.56832138
 * numberRandomFloat(0,100) // 54.2135123
 * numberRandomFloat(0.1,0.2) // 0.125323
 */
const numberRandomFloat = (min: number = 0, max: number = 1): number => min + Math.random() * (max - min);

export default numberRandomFloat;
