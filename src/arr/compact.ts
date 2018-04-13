/**
 * Returns an array with every falsey value removed out.
 *
 * @function arrCompact
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr
 * @returns {any[]}
 * @example
 * arrCompact([1, "", "", 2, 3, null, 4, undefined, 5, ""])
 * // => [1, 2, 3, 4, 5]
 */
const arrCompact = <T>(arr: T[]): T[] => arr.filter((val: T) => val);

export default arrCompact;
