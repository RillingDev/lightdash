/**
 * Creates a new array with the values of the input iterable
 *
 * Array.from shorthand
 *
 * @function arrClone
 * @memberof Array
 * @since 1.0.0
 * @param {any} arr
 * @returns {any[]}
 * @example
 * //returns a = [1,2,3], b = [1,10,3]
 * const a = [1,2,3];
 * const b = arrClone(a);
 *
 * b[1] = 10;
 */
const arrClone = Array.from;

export default arrClone;
