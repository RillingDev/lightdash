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
declare const randomItem: <T>(arr: T[]) => T;
export default randomItem;
