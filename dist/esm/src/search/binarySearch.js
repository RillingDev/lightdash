/**
 * Binary-search implementation.
 *
 * @since 5.0.0
 * @category Search
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
const binarySearch = (arr, search) => {
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (low <= high) {
        mid = Math.floor(low + (high - low) / 2);
        const current = arr[mid];
        if (current === search) {
            return mid;
        }
        if (current < search) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return null;
};
export { binarySearch };
//# sourceMappingURL=binarySearch.js.map