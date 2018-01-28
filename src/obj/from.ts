import arrFrom from "../arr/from";
import isArray from "../is/array";
import objMerge from "../obj/merge";
import { IGenericObject } from "../interfaces";

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
const objFrom = <T>(obj: IGenericObject<T> | T[]): IGenericObject<T> | T[] =>
    isArray(obj) ?
        arrFrom(obj) :
        objMerge({}, obj);

export default objFrom;
