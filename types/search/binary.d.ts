/**
 * Binary-search implementation.
 *
 * @since 5.0.0
 * @param arr Array to search in.
 * @param search Value to search.
 * @returns Index of the value in the array, or null if none is found.
 * @example
 * searchBinary([0, 1, 2], 1)
 * // => 1
 *
 * searchBinary([0, 1, 2], 100)
 * // => null
 */
declare const searchBinary: (arr: number[], search: number) => number | null;
export { searchBinary };
