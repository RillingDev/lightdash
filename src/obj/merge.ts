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
const objMerge = Object.assign;

export default objMerge;
