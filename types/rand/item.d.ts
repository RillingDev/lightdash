/**
 * Return a random item from an array.
 *
 * @function randItem
 * @memberof Random
 * @since 3.0.0
 * @param {any[]} arr
 * @returns {any}
 * @example
 * randItem(["foo", "bar"])      //=> "foo"
 * randItem([1, 2, 3, 4, 5])   //=> 3
 */
declare const randItem: <T>(arr: T[]) => T;
export default randItem;
