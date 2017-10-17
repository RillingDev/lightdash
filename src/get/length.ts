/**
 * Returns length property of target
 *
 * @since 1.0.0
 * @param {any} target
 * @returns {number}
 * @example
 * // returns 2
 * getLength([1,2]);
 *
 * @example
 * // returns 3
 * getLength("foo");
 *
 * @example
 * // returns 10
 * getLength({length:10});
 */
const getLength = (target: any): number => target.length;

export default getLength;
