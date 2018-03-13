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
declare const randNumber: (min?: number, max?: number, floating?: boolean) => number;
export default randNumber;
