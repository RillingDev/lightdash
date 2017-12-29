/**
 * Returns an array of all unique elements in an array.
 *
 * @function arrUniq
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr
 * @returns {any[]}
 * @example
 * // returns [1, 2, 3, 4]
 * arrUniq([1, 1, 1, 2, 3, 1, 2, 1, 4])
 */
declare const arrUniq: <T>(arr: T[]) => T[];
export default arrUniq;
