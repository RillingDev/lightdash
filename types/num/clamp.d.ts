/**
 * Clamps a number in a given range.
 *
 * @function numberClamp
 * @memberof Number
 * @since 1.0.0
 * @param {number} val
 * @param {number} min
 * @param {number} max
 * @returns {number}
 * @example
 * numberClamp(5, 0, 10)    //=> 5
 * numberClamp(-2, 0, 10)   //=> 0
 * numberClamp(99, 0, 10)   //=> 10
 */
declare const numberClamp: (val: number, min: number, max: number) => number;
export default numberClamp;
