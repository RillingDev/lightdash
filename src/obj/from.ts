import arrFrom from "../arr/from";
import isArray from "../is/array";

/**
 * Creates a new object with the entries of the input object.
 *
 * @function objFrom
 * @memberof Object
 * @since 1.0.0
 * @param {object} obj
 * @returns {object}
 * @example
 * // returns a = {a: 4, b: 2}, b = {a: 10, b: 2}
 * const a = {a: 4, b: 2};
 * const b = objFrom(a);
 *
 * b.a = 10;
 */
const objFrom = (obj: object): object =>
    isArray(obj) ? arrFrom(obj) : Object.assign({}, obj);

export default objFrom;
