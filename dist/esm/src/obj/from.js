/**
 * Creates a new object with the entries of the input object.
 *
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj Object to copy.
 * @returns {Object} Copy of the object.
 * @example
 * const a = {a: 4, b: 2};
 * const b = objFrom(a);
 *
 * b.a = 10;
 * // a = {a: 4, b: 2}
 * // b = {a: 10, b: 2}
 */
const objFrom = (obj) => Object.assign({}, obj);
export { objFrom };
//# sourceMappingURL=from.js.map