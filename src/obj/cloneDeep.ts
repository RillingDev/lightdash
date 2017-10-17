import isObject from "../is/object";
import objClone from "./clone";
import objMapDeep from "./mapDeep";

/**
 * Deeply creates a new object with the entries of the input object
 *
 * @since 1.0.0
 * @param {Object} obj
 * @returns {Object}
 * @example
 * //returns a = {a:{b:2,c:[10,20]}}, b = {a:{b:2,c:[123,20]}}
 * const a = {a:{b:2,c:[10,20]}};
 * const b = objCloneDeep(a);
 *
 * b.b.c[0] = 123;
 */
const objCloneDeep = (obj: object): object => objMapDeep(objClone(obj), (val) => isObject(val) ? objClone(val) : val);

export default objCloneDeep;
