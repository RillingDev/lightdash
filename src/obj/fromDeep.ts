import { isObjectLike } from "../is/objectLike";
import { objFrom } from "./from";
import { ITypedObject } from "./lib/ITypedObject";
import { objMapDeep } from "./mapDeep";

/**
 * Recursively creates a new object with the entries of the input object.
 *
 * @function objFromDeep
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @returns {Object}
 * @example
 * const a = {a: {b: 2, c: {a: 10, b: 20}}};
 * const b = objFromDeep(a);
 *
 * b.a.c.a = 123;
 * // a = {a: {b: 2, c: {a: 10, b: 20}}
 * // b = {a: {b: 2, c: {a: 123, b: 20}}}
 */
const objFromDeep = <T>(obj: ITypedObject<T>): ITypedObject<T> =>
    objMapDeep(
        objFrom(obj),
        (key, val) => (isObjectLike(val) ? objFrom(val) : val)
    );

export { objFromDeep };
