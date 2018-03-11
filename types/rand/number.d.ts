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
declare const randomNumber: (min?: number, max?: number, floating?: boolean) => number;
export default randomNumber;
