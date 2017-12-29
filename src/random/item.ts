import randomNumber from "./number";

/**
 * Return a random item from an array.
 *
 * @function randomItem
 * @memberof Random
 * @since 3.0.0
 * @param {any[]} arr
 * @returns {any}
 * @example
 * randomItem(["foo", "bar"])      //=> "foo"
 * randomNumber([1, 2, 3, 4, 5])   //=> 3
 */
const randomItem = <T>(arr: T[]): T =>
    arr[randomNumber(0, arr.length - 1, false)];

export default randomItem;
