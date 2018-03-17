import isIndex from "../is/index";

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
 * arrRemoveIndex(["foo", "bar", "fizz"], 1)
 * // => ["foo", "fizz"]
 */
const arrRemoveIndex = <T>(arr: T[], index: number): T[] => {
    if (!isIndex(index) || index > arr.length) {
        return arr;
    }

    return index === 0
        ? arr.slice(1)
        : arr.slice(0, index).concat(arr.slice(index + 1));
};

export default arrRemoveIndex;
