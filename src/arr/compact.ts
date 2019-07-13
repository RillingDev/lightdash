/**
 * Returns an array with every falsey value removed.
 *
 * @since 1.0.0
 * @param {any[]} arr Array to compact.
 * @returns {any[]} Compacted array.
 * @example
 * arrCompact([1, "", "", 2, 3, null, 4, undefined, 5, ""])
 * // => [1, 2, 3, 4, 5]
 */
const arrCompact = <T>(arr: T[]): T[] => arr.filter(val => val);

export { arrCompact };
