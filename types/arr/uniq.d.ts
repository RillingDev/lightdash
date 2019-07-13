/**
 * Returns an array of all unique elements in an array.
 *
 * @since 1.0.0
 * @param {any[]} arr Array to use.
 * @returns {any[]} Array of the unique values.
 * @example
 * arrUniq([1, 1, 1, 2, 3, 1, 2, 1, 4])
 * // => [1, 2, 3, 4]
 */
declare const arrUniq: <T>(arr: T[]) => T[];
export { arrUniq };
