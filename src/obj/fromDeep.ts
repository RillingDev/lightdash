import isObjectLike from "../is/objectLike";
import objFrom from "./from";
import objMapDeep from "./mapDeep";
import { IGenericObject } from "../interfaces";
import { nestedObj } from "../types";

/**
 * Deeply creates a new object with the entries of the input object.
 *
 * @function objFromDeep
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @returns {Object}
 * @example
 * // returns a = {a: {b: 2, c: {a: 10, b: 20}}, b = {a: {b: 2, c: {a: 123, b: 20}}}
 * const a = {a: {b: 2, c: {a: 10, b: 20}}};
 * const b = objFromDeep(a);
 *
 * b.a.c.a = 123;
 */
const objFromDeep = <T>(obj: nestedObj<T>): nestedObj<T> =>
    objMapDeep(
        <IGenericObject<T>>objFrom(obj),
        (key, val) =>
            isObjectLike(val) ?
                <IGenericObject<T>>objFrom(<IGenericObject<T>>val) :
                <T>val
    );

export default objFromDeep;
