import numberInRange from "../number/inRange";

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
const arrRemoveIndex = <T>(arr: T[], index: number): T[] => {
    if (numberInRange(index, 0, arr.length - 1)) {
        return index === 0
            ? arr.slice(1)
            : arr.slice(0, index).concat(arr.slice(index + 1));
    } else {
        return arr;
    }
};

export default arrRemoveIndex;
