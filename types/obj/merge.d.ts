/**
 * Merges contents of two objects.
 *
 * `Object.assign` shorthand.
 *
 * @function objMerge
 * @memberof Object
 * @since 2.7.0
 * @param {Object} obj
 * @param {Object} objSecondary
 * @returns {Object}
 * @example
 * // returns {a: 1, b: 2}
 * objMerge({a: 1}, {b: 2})
 */
declare const objMerge: {
    <T, U>(target: T, source: U): T & U;
    <T, U, V>(target: T, source1: U, source2: V): T & U & V;
    <T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
    (target: object, ...sources: any[]): any;
};
export default objMerge;