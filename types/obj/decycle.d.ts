import { ITypedObject } from "../interfaces";
import { forEachEntryMapper } from "../types";
/**
 * Replaces every cyclic reference of an object.
 *
 * Can take a custom replacer function and a pre-filled WeakSet of references.
 *
 * @function objDecycle
 * @memberof Object
 * @since 6.0.0
 * @param {Object} obj
 * @param {function} [fn=()=>null] fn(key: any, val: any, index: number, obj: object)
 * @param {WeakSet<any>} [references=new WeakSet()]
 * @returns {Object}
 * @example
 * const a = {b: 1, c: 2};
 *
 * a.a = a;
 *
 * objDecycle(a)
 * // => {a: null, b: 1, c: 2}
 *
 * objDecycle(a,key=>`_${key}`)
 * // => {a: "_a", b: 1, c: 2}
 */
declare const objDecycle: (obj: ITypedObject<any>, fn?: forEachEntryMapper<any, any>, references?: WeakSet<any>) => object;
export default objDecycle;
