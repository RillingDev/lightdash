/**
 * Binary Search implementation
 *
 * @function algBinarySearch
 * @memberof Algorithm
 * @since 5.0.0
 * @param {number[]} arr
 * @param {number} search
 * @returns {number|null}
 * @example
 * algBinarySearch([0,1,2],2)         //=> 1
 * algBinarySearch([0,1,2], 100)         //=> null
 */
const algBinarySearch = (arr: number[], search: number): number | null => {
    let low = 0;
    let high = arr.length - 1;
    let mid: number;

    while (low <= high) {
        mid = Math.floor(low + (high - low) / 2);

        const current = arr[mid];

        if (current === search) {
            return mid;
        } else if (current < search) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return null;
};

export default algBinarySearch;
