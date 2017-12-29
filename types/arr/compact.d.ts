/**
 * Returns an array with every falsey value removed out.
 *
 * @function arrCompact
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr
 * @returns {any[]}
 * @example
 * // returns [1, 2, 3, 4, 5]
 * arrCompact([1, "", "", 2, 3, null, 4, undefined, 5, ""])
 */
declare const arrCompact: <T>(arr: T[]) => T[];
export default arrCompact;
