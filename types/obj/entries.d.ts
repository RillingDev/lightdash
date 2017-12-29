/**
 * Returns an array of the objects entries.
 *
 * `Object.entries` shorthand.
 *
 * @function objEntries
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @returns {any[]} Array<[key: any, val: any]>]
 * @example
 * // returns [["a", 1], ["b", 2], ["c", 3]]
 * objEntries({a: 1, b: 2, c: 3})
 */
declare const objEntries: {
    <T>(o: {
        [s: string]: T;
    } | {
        [n: number]: T;
    }): [string, T][];
    (o: any): [string, any][];
};
export default objEntries;
