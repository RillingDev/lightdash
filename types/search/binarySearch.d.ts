/**
 * Binary-search implementation.
 *
 * @since 5.0.0
 * @memberOf Search
 * @param arr Array to search in.
 * @param search Value to search.
 * @returns Index of the value in the array, or null if none is found.
 * @example
 * binarySearch([0, 1, 2], 1)
 * // => 1
 *
 * binarySearch([0, 1, 2], 100)
 * // => null
 */
declare const binarySearch: (arr: ArrayLike<number>, search: number) => number | null;
export { binarySearch };
