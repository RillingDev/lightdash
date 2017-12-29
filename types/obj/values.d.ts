/**
 * Returns an array of the objects values.
 *
 * `Object.values` shorthand.
 *
 * @function objValues
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @returns {any[]}
 * @example
 * // returns [1, 2, 3]
 * objValues({a: 1, b: 2, c: 3})
 */
declare const objValues: {
    <T>(o: {
        [s: string]: T;
    } | {
        [n: number]: T;
    }): T[];
    (o: any): any[];
};
export default objValues;
