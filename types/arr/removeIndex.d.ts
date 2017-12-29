/**
 * Returns a new array with the item at the index removed.
 *
 * @function arrRemoveIndex
 * @memberof Array
 * @since 2.8.0
 * @param {any[]} arr
 * @param {number} index
 * @returns {any[]}
 * @example
 * // returns ["foo", "fizz"]
 * arrRemoveIndex(["foo", "bar", "fizz"], 1)
 */
declare const arrRemoveIndex: <T>(arr: T[], index: number) => T[];
export default arrRemoveIndex;
