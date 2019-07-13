import { isObjectLike } from "../is/objectLike";
import { objFrom } from "./from";
import { IAnyObject } from "./lib/IAnyObject";
import { objMapDeep } from "./mapDeep";

/**
 * Recursively creates a new object with the entries of the input object.
 *
 * @since 1.0.0
 * @param {Object} obj Object to copy.
 * @returns {Object} Copy of the object.
 * @example
 * const a = {a: {b: 2, c: {a: 10, b: 20}}};
 * const b = objFromDeep(a);
 *
 * b.a.c.a = 123;
 * // a = {a: {b: 2, c: {a: 10, b: 20}}
 * // b = {a: {b: 2, c: {a: 123, b: 20}}}
 */
const objFromDeep = (obj: IAnyObject): IAnyObject =>
    objMapDeep(objFrom(obj), val => (isObjectLike(val) ? objFrom(val) : val));

export { objFromDeep };
