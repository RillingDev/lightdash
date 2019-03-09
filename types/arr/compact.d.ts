/**
 * Returns an array with every falsey value removed.
 *
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr Array to compact.
 * @returns {any[]} Compacted array.
 * @example
 * arrCompact([1, "", "", 2, 3, null, 4, undefined, 5, ""])
 * // => [1, 2, 3, 4, 5]
 */
declare const arrCompact: <T>(arr: T[]) => T[];
export { arrCompact };
