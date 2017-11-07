import arrRemoveIndex from "./removeIndex";

/**
 * Returns a new array with the first occurence of the item removed
 *
 * @function arrRemoveItem
 * @memberof Array
 * @since 2.8.0
 * @param {any[]} arr
 * @param {any} item
 * @returns {any[]}
 * @example
 * //returns [1,2,3,4,5,6]
 * arrRemoveItem([1,2,3,4,5,6],6)
 */
const arrRemoveItem = (arr: any[], item: any): any[] =>
    arr.includes(item) ?
        arrRemoveIndex(arr, arr.indexOf(item)) :
        arr;

export default arrRemoveItem;
